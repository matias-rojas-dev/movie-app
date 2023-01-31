import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Cast, MovieCredits} from '../interfaces/creditsInterface';

interface MovieCreditsCastCrew {
  isLoading: boolean;
  movieCredits: MovieCredits;
  casts: Cast[];
  crew: Cast[];
}

export const useMovieCredits = (movieId: number) => {
  const [credits, setCredits] = useState<MovieCreditsCastCrew>();

  const getMovieCredits = async () => {
    const response = await movieDB.get(`/${movieId}/credits`);
    setCredits(response.data);
  };

  useEffect(() => {
    getMovieCredits();
  }, []);

  return {credits};
};
