import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import ReactPlayer from 'react-player';
const MovieDescription =({movies}) => {
    const[MovieDescription, setMovieDescription] = useState([]);
    const {id}= useParams();
    
    useEffect(()=> {
        setMovieDescription(movies.find((movie) => movie.id === +id));
    }, []);
    return <div>
       <h6>{MovieDescription.description}</h6> 
       <ReactPlayer url={MovieDescription.trailer} />

        </div>;
};
export default MovieDescription;