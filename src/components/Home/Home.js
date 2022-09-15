import React from 'react';
import "./Home.css";
import HeroPgae from "../HeroPage/HeroPage"
import Header from "../Header/Header";
import Checkout from "../Checkout/Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = () => {
 
  return (
       <div className="home">
        <Header/>
       <Router>
       <Switch>
        <Route path="/Checkout">
        <Checkout/>
       </Route>
       <Route path="/">
          <HeroPgae/>
       </Route>
       </Switch>
       </Router>
 
       </div>
  )
}

export default Home