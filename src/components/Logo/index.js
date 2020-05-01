import React from 'react';
import './style.css';

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
    <img src={require("../Img/Banner.jpg")} className="banner-one"/>
    </div>
   )

 }

export default Logo