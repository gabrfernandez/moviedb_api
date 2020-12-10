const base_url = "https://api.themoviedb.org/3/movie/" ;
const api_key = process.env.REACT_APP_API_KEY


export const popularMoviesURL = ()=> `${base_url}top_rated?api_key=${api_key}&language=en-US&page=1`
export const upcomingMoviesURL= ()=> `${base_url}upcoming?api_key=${api_key}&language=en-US&page=1`
export const newMoviesURL= ()=> `${base_url}now_playing?api_key=${api_key}&language=en-US&page=1`

export const movieDetailURL=(movie_id)=>`${base_url}${movie_id}?api_key=${api_key}&language=en-US`

export const movieVideoURL=(movie_id)=> `${base_url}${movie_id}/videos?api_key=${api_key}&language=en-US`

export const movieScreenshotURL=(movie_id)=>`${base_url}${movie_id}/images?api_key=${api_key}&language=en-US&include_image_language=en`

export const searchMovieURL=(movie_name)=>`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${movie_name}`
