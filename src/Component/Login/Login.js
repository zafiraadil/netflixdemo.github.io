import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../Store/UserContext'
import './Login.css'



function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const{loginUser}=useUserContext()
  const navigate=useNavigate()
  
  const onHandle=(e)=>{
    e.preventDefault()
    loginUser(email,password)
    .then(()=>
    navigate('/'))
    

  }

  return (
    <div className='mainContainer'>
    <div className='sub'>
    <div className='container'>
    <form className='myForm' onSubmit={onHandle}>
        <label forName='email'>Email</label>
        <input type='text' id='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <label forName='pass'>Name</label>
        <input type='password' id='upass' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
    
       <button type='submit'>Submit</button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Login