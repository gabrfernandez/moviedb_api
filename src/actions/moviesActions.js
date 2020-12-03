import axios from 'axios';
import {popularMoviesURL, upcomingMoviesURL, newMoviesURL, searchMovieURL} from '../api';

  
export const loadMovies = () => async (dispatch)=>{
    const popularData = await axios.get(popularMoviesURL());
    const newMoviesData = await axios.get(newMoviesURL());
    const upcomingMoviesData = await axios.get(upcomingMoviesURL())

    dispatch({
        type:"FETCH_MOVIES",
        payload:{
            popular: popularData.data.results,
            newMovies:newMoviesData.data.results,
            upcomingMovies: upcomingMoviesData.data.results,
        }
    })
}

export const fetchSearch=(movie_name)=> async (dispatch)=>{
    const searchMovies = await axios.get(searchMovieURL(movie_name));

    dispatch({
        type:"FETCH_SEARCHED",
        payload:{
            searched: searchMovies.data.results,
        }
    })
}