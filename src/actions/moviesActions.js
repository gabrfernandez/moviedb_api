import axios from 'axios';
import {popularMoviesURL, upcomingMoviesURL, newMoviesURL, searchMovieURL} from '../api';

export const loadMovies = () => async (dispatch)=>{
    const {data} = await axios.get(popularMoviesURL());

    dispatch({
        type:"FETCH_MOVIES",
        payload:{
            popular: data.results
        }
    })
}