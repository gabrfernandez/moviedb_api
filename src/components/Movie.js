import React from 'react'
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import {motion} from "framer-motion"
import {popup} from '../animations'


function Movie({title, released, image, id}) {
    const stringPathId=id.toString();

    const dispatch = useDispatch();


    const loadDetailHandler = ()=>{
        document.body.style.overflow="hidden";
        dispatch(loadDetail(id))
    }
    
    return (
        <StyledMovie 
            variants={popup} 
            initial="hidden" 
            animate="show"
            layoutId={stringPathId} 
            onClick={loadDetailHandler}
        >
            <Link to={`/movie/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{title}</motion.h3>
                <p>{released}</p>
                <motion.img 
                    layoutId={`image ${stringPathId}`}
                    src={image}
                    alt={title}
                />
            </Link>
        </StyledMovie>
    )
}

const StyledMovie = styled(motion.div)`
    min-height:30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align:center;
    border-radius: 1rem;
    cursor:pointer;
    overflow:hidden;
    img{
        width:100%;
        height: 40vh;
        object-fit:cover;
    };
`;

export default Movie
