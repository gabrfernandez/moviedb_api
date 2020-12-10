import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadMovies} from '../actions/moviesActions'
import Movie from "../components/Movie"
import MovieDetail from '../components/MovieDetail'
import styled from "styled-components"
import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion"
import { useLocation } from 'react-router-dom'
import { fadeIn } from '../animations'

function Home() {

    const location =useLocation();
    const pathId=location.pathname.split("/")[2];

    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch])

    const {popular, newMovies, upcomingMovies, searched} = useSelector(
        (state)=>state.movies
    )
    return (
        <div>
            <MovieList variants={fadeIn} initial="hidden" animate="show">
                <AnimateSharedLayout type="crossfade">
                    <AnimatePresence>
                        {pathId && <MovieDetail pathId={pathId}/>}
                    </AnimatePresence>
                    {searched.length ? (
                        <div className="searched">
                            <h2>Search Results</h2>
                            <Movies>
                                {searched.map((movie)=>(
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        released={movie.release_date}
                                        image={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    />
                                ))}
                            </Movies>
                        </div>
                    ):(
                        ""
                    )}
                    <h2>Popular Movies</h2>
                    <Movies>
                        {popular.map((movie)=>(
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                released={movie.release_date}
                                image={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        ))}
                    </Movies>
                    <h2>Upcoming Movies</h2>
                    <Movies>
                        {upcomingMovies.map((movie)=>(
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                released={movie.release_date}
                                image={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                        ))}
                    </Movies>
                    <h2>New Movies</h2>
                    <Movies>
                        {newMovies.map((movie)=>(
                            <Movie 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            released={movie.release_date}
                            image={`//image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        />
                        ))}
                    </Movies>
                </AnimateSharedLayout>
            </MovieList>
        </div>
    )
}

const MovieList=styled(motion.div)`
    padding:0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`

const Movies= styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap:3rem;
    grid-row-gap:5rem;
`
export default Home
