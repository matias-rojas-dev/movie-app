import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setNowPlayingMovies(resp.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    // now playing movies
    getMovies();
  }, []);

  return {nowPlayingMovies, isLoading};
};
