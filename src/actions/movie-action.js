const baseURL = 'https://api.themoviedb.org/3/movie';
import axios from "axios";

export const getMovies=async ()=>{
    let movies=[];
    await axios.get(baseURL+'/popular?api_key=d8a34db4b32a7396e071d7498e0b678d').then((res)=>{
        movies=res.data.results;
    })
    return{
        type:"MOVIE_LIST",
        payload:movies
    }
}

export const getMovieByID=async (id)=>{
    var movie={};
    await axios.get(`${baseURL}/${id}?api_key=d8a34db4b32a7396e071d7498e0b678d`).then((res)=>{
        movie=res.data;
    });
    
    return{
        type:"MOVIE_DETAILS",
        payload:movie
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}