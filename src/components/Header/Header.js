import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Avatar, IconButton } from "@material-ui/core";
import {useSelector} from "react-redux"
import {selectUser} from "../../features/userSlice"
import {auth} from "../../firebase";
 
const Header = () => {
    
     const user =useSelector(selectUser);
  return (
    <div className="header">
                <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
                  <div className="headerSearch">
                     <input className="searchInput" type="text" />
                   <SearchIcon className="searchIcon" />
                  </div>
                   <div className="header-nav">
 
                <div className="header-option">
                    <span className="header-OptionLineOne">
                        Returns
                    </span>
                    <span className="header-OptionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-OptionLineOne">
                        Your
                    </span>
                    <span className="header-OptionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header-optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header-OptionLineTwo header-basketCount">0</span>
                    <Avatar onClick={()=>auth.signOut()} src={user.photo} className="sidebar-avatar"/>
                </div>
  
            </div>
             
    </div>
  )
}

export default Header