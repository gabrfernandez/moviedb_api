import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import {useSelector} from "react-redux"
import { useHistory } from 'react-router-dom'
import {smallImage} from '../util'

function MovieDetail({pathId}) {

    const history = useHistory();

    const exitDetailHandler=(e)=>{
        const element=e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow="auto";
            history.push("/");
        }
    }

    const {screen, movie, isLoading} = useSelector(
        (state)=> state.detail
    );
    return (
        <div>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{movie.title}</motion.h3>
                                <p>Rating: {movie.vote_average}</p>
                            </div>
                            <Info>
                                <h3>Release Date</h3>
                                <p>{movie.release_date}</p>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img 
                                layoutId={`image ${pathId}`}
                                src={smallImage(movie.backdrop_path, 1280)}
                                alt={movie.backdrop_path}
                            />
                        </Media>
                        <Description>
                            <p>{movie.overview}</p>
                        </Description>
                        {/* <div className="gallery">
                            {screen.posters.map((screen)=>(
                                <img src={screen.image} key={screen.id} alt={screen.image} />
                            ))}
                        </div> */}
                    </Detail>
                </CardShadow>
            )}
        </div>
    )
}

const CardShadow = styled(motion.div)`
    width:100%;
    min-height:100vh;
    overflow-y:scroll;
    background: rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    z-index:5;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-track{
        background:white;
    }
`

const Detail = styled(motion.div)`
    width:80%;
    border-radius:1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left:10%;
    color:black;
    z-index:10;
    img{
        width:100%
    }
`

const Stats = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Info= styled(motion.div)`
    text-align:center;
`

const Media=styled(motion.div)`
    margin-top: 5rem;
    img{
        width:100%;
    }
`

const Description=styled(motion.div)`
    margin: 5rem 0rem;
`
export default MovieDetail
