import React from "react"
import {Link} from 'react-router-dom'
import './Navbar.css'
 import { useUserContext} from '../../Store/UserContext'



function Navbar() {
  const{user,logoutUser}=useUserContext()

  return (
<div className="App">
    <div className="navbar">
          <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
            alt="netflix"></img>
            <ul class="right">
              
            <li><Link to="/login">{user ? `welcome ${user.displayName}` : "login"}</Link></li>
            {user && <li><Link onClick={logoutUser} to="/">Logout</Link></li>}

            <li><Link to="/signup">{!user && "signup"}</Link></li>
              
            <li><Link to="/">Home</Link></li>
         </ul>
    </div>
    </div>
     )
}

export default Navbar