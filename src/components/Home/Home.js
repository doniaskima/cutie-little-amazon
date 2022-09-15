import React from 'react';
import "./Home.css";
import { Avatar, IconButton } from "@material-ui/core";
import {useSelector} from "react-redux"
import {selectUser} from "../../features/userSlice"
import {auth} from "../../firebase"
const Home = () => {
     const user =useSelector(selectUser);
  return (
       <div className="home">
         <h1>Welcome to Home babee</h1>
            <Avatar onClick={()=>auth.signOut()} src={user.photo} className="sidebar-avatar"/>
       </div>
  )
}

export default Home