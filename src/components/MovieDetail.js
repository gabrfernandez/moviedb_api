import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import {useSelector} from "react-redux"
import { useHistory } from 'react-router-dom'
import {smallImage} from '../util'
import starFull from "../img/star-full.png"
import starEmpty from "../img/star-empty.png"
import ReactPlayer from 'react-player'


function MovieDetail({pathId}) {

    const history = useHistory();

    const exitDetailHandler=(e)=>{
        const element=e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow="auto";
            history.push("/");
        }
    }

    const getStars=()=>{
        const stars=[];
        const rating=Math.floor(movie.vote_average);
        for(let i =1; i<=10;i++){
            if(i<=rating){
                stars.push(<img src={starFull} alt="starFull" key={i}></img>)
            }else{
                stars.push(<img src={starEmpty} alt="starEmpty" key={i}></img>)
            }
        }
        return stars
    }

    const {screen, movie, video, isLoading} = useSelector(
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
                                <p>Vote Average: {movie.vote_average}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Release Date:</h3>
                                <p>{movie.release_date}</p>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img 
                                layoutId={`image ${pathId}`}
                                src={smallImage(`//image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`, 1280)}
                                alt={movie.backdrop_path}
                            />
                        </Media>
                        <Description>
                            <h3>Overview:</h3>
                            <p>{movie.overview}</p>
                        </Description>

                        <div className="video">
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${video.results[0].key}`}
                                controls="true"
                            />
                        </div>
                        <div className="gallery">
                            {screen.backdrops.map((screen)=>(
                                <img 
                                    src={smallImage(`//image.tmdb.org/t/p/w185_and_h278_face${screen.file_path}`, 1280)} 
                                    alt={screen.file_path} 
                                    key={screen.id} 
                                />
                            ))}
                        </div>
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
    img{
        width:2rem;
        height:2rem;
        display:inline;
    }
`

const Info= styled(motion.div)`
    text-align:center;
`

const Media=styled(motion.div)`
    margin-top: 5rem;
    img{
        width:100%;
    };
`

const Description=styled(motion.div)`
    margin: 5rem 0rem;
`
export default MovieDetail
