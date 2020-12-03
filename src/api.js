const base_url = "https://api.themoviedb.org/3/movie/"
const api_key = 'api_key=829ba48c054bc241692ca990d4f013de'


export const popularMoviesURL = ()=> `${base_url}popular?${api_key}&language=en-US&page=1&page_size=10`
export const upcomingMoviesURL= ()=> `${base_url}upcoming?${api_key}&language=en-US&page=1&page_size=10`
export const newMoviesURL= ()=> `${base_url}now_playing?${api_key}&language=en-US&page=1&page_size=10`

export const movieDetailURL=(movie_id)=>`${base_url}${movie_id}?${api_key}&language=en-US`

export const movieScreenshotURL=(movie_id)=>`${base_url}${movie_id}/images?${api_key}&language=en-US`

export const searchMovieURL=(movie_name)=>`${base_url}${api_key}movies?search=${movie_name}&page_size=10`