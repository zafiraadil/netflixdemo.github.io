import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
 import {db} from "../../firebase/Config"
 import {addDoc,collection} from "firebase/firestore"

 import { useUserContext } from '../../Store/UserContext'
 import { updateProfile } from 'firebase/auth'

import 'firebase/compat/firestore'
import './SignUp.css'
function SignUp(){

    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
     const{user,registerUser}=useUserContext()
    const navigate=useNavigate()



    const onHandle=(e)=>{
        e.preventDefault()
        
       registerUser(email,username,password)
        // console.log(email)
        .then(()=> addDoc(collection(db,'users'),{
          id:user.uid,
          username:username,
          email:email,
          phone:phone
      }))
        .then(()=>navigate('/login'))
        }

        
            

        // createUserWithEmailAndPassword(auth,'email','password').then((result)=>{
            
        //       result.data.updateProfile({displayName:username}).then(()=>{
        //     db.collection('users').add({
        //         id:result.data.uid,
        //         username:username,
        //         phone:phone
        
        //     }).then(()=>{
        //         navigate('/login')
        //     })

        //   })
          
        //   }
        // )
        // console.log(username)

    return(
        <div className='mainContainer'>
        <div className='sub'>
        <div className='container'>
          
        <form className='myForm' onSubmit={onHandle}>
        <label forName='uname'>Name</label>
        <input type='text' id='uname' value={username} placeholder='Enter name' onChange={(e)=>setUserName(e.target.value)}/>
        <label forName='uemail'>Email</label>
        <input type='text' id='uemail' value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <label forName='uphone'>Phone</label>
        <input type='text' id='uphone' value={phone} placeholder='Enter phone' onChange={(e)=>setPhone(e.target.value)}/>
        <label forName='upass'>Password</label>        
        <input type='password' id='upass' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
    
       <button className='btn' type='submit'>Submit</button>

    </form>
    </div>
    </div>
    </div>
    )
}

export default SignUp;





