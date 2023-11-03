import React, { useEffect, useState } from 'react'
import './Banner.css'
// import { BaseUrl } from '../../constants/constants'
import { API_KEY,imageUrl } from '../../constants/constants'
import axios from '../../axios'

function Banner() {
  const[movie,setMovie]=useState()
  useEffect(()=> {
    axios.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results.sort(function(a,b)
      {return 0.5-Math.random()})[0])
    })
  },[])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='Banner'>
    <div className='content'>
        <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>Next</button>
            </div>
            <h3 className='description'>{movie ? movie.overview :""}</h3>
    </div>
    <div className="fade"></div>
    </div>
  )
}

export default Banner