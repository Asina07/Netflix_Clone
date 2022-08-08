import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from '../../axios';
import {APIKey,imageUrl} from '../../Constants/Constants'
function Banner() {

  const[movie,setMovie]=useState()

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${APIKey}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
    // after import usestate 
     setMovie(response.data.results[1])
    // setMovie(response.data.results.map((e)=>e))



    })
  },[])
  return (
    <div
     style={{backgroundImage:`url(${movie?  imageUrl+ movie.backdrop_path : ''})`}}
     className='banner'>
        <div className='content'>
          
            <h1 className='title'> {movie? movie.title : ''}</h1>
            <div className='banner-buttons'>
                <button className='button'> Play</button>
                <button className='button'> MyList</button>
            </div>
            <h1 className='description'>{movie? movie.overview: ''} </h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
   
  )
}

export default Banner