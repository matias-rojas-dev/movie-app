import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Cast, MovieCredits} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterfaces';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castCredits = await movieDB.get<MovieCredits>(`/${movieId}/credits`);

    const [promiseMovieDetails, promiseMovieCast] = await Promise.all([
      movieDetailsPromise,
      castCredits,
    ]);

    setState({
      isLoading: false,
      movieFull: promiseMovieDetails.data,
      cast: promiseMovieCast.data.cast,
    });
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
