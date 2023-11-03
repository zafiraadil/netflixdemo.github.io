import React from "react";
import './App.css';
import {UserContextProvider}  from "./Store/UserContext";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from './Component/Login/Login';
import SignUp from "./Component/signup/SignUp";


function App() {
  return (
  <div className="app">
        <UserContextProvider>
       <Router>
        <Routes>
      <Route exact path="/"
      element={<Home/>}
      />
        <Route path="/signup"
        element={<SignUp/>}
      />
        <Route path="/login"
        element={<Login/>}
      />
      </Routes>
      </Router>
      </UserContextProvider>

    </div>


  )
}

export default App;
