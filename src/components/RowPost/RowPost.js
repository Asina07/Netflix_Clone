import React, { useEffect, useState } from 'react';
import "./RowPost.css";
import axios from 'axios';
import YouTube from 'react-youtube';
import {imageUrl,APIKey } from '../../Constants/Constants';

function RowPost(props) {
   const [movies, setMovies] =useState([])
   const [Urlid, setUrlId] =useState('')

  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      console.log(err)
    })
  },[])



  //from google youtube npm
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 


  const handleMovieTrailer = (id)=>{
    console.log("id",id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKey}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer not available")
      }
 })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
          
             <img onClick={()=> handleMovieTrailer(obj.id)}  className={props.isSmall ? 'smallposter'  :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
          )}
            
            
        </div>
       {Urlid && <YouTube videoId={Urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost