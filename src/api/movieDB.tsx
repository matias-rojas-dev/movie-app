import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '095136677db0a43bede31cfdf7fc4570',
    language: 'es-ES',
  },
});

export default movieDB;
