import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const respPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    // const respPopular = await movieDB.get<MovieDBMoviesResponse>('/top_rated');
    // const respPopular = await movieDB.get<MovieDBMoviesResponse>('/upcoming');

    setNowPlayingMovies(respNowPlaying.data.results);
    setPopularMovies(respPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // now playing movies
    getMovies();
  }, []);

  return {nowPlayingMovies, isLoading, popularMovies};
};
