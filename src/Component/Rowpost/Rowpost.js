import React, { useState,useEffect } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'

function Rowpost(props) {
  const[movies,setMovies] = useState([]);
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[])
  return (
    <div className='row'>
        <h2 style={{color:'red'}}>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img className={props.isSmall ? 'smallposter':'poster'} alt="films" src={`${imageUrl+obj.backdrop_path}`}/>
          )}
          
        </div>
    </div>
  )
}

export default Rowpost