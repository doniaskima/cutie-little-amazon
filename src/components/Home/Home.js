import React from 'react';
import "./Home.css";
import HeroPgae from "../HeroPage/HeroPage"
import Header from "../Header/Header";

const Home = () => {
 
  return (
       <div className="home">
         <Header/>
        <HeroPgae/>
       </div>
  )
}

export default Home