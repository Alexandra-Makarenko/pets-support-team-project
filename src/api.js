import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const KEY = '2e84a3ac834b739d0dd29a1e9937557'
const KEY = '2e84a3ac834b739d0dd29a1e99375572'

export const getTrendingFilms = async () => {
    const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
    const result = response.data.results;
    console.log(result)
    return result;
};
// export const getFilms = async (query) => {
//     const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}&page=1`);
//     const result = response.data.results;
//     console.log(result)
//     return result;
// };
// export const getFilmById = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
//     const result = response.data;
//     //  const result = response.data.genres.map(genre=>genre.name);
//     console.log(result)
//     return result;
// };
// export const getFilmGenres = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
//     const result = response.data.genres.map(genre=>genre.name);
//     console.log(result)
//     return result;
// };
// export const getFilmCast = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
//     const result = response.data.cast;
//     console.log(result)
//     return result;
// };
// export const getFilmReviews = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`);
//     const result = response.data.results;
//     console.log(result)
// //     return result;
// };





