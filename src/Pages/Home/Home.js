import React from 'react'
import Navbar from "../../Component/Navbar/Navbar";
import Banner from "../../Component/Banner/Banner";
import Rowpost from "../../Component/Rowpost/Rowpost";
import { action, horror, originals } from "../../Url";


function Home(){
return(
    <div>
        <Navbar/>
        <Banner/>
      <Rowpost url={originals} title="originals"/>
      <Rowpost url={action} title="Actions" isSmall/>
      <Rowpost url={horror} title="Horror" isSmall/>
    </div>
  )
}


export default Home