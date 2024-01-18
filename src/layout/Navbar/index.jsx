import React from "react";
import Slider from "../../components/Slider";
import { NavLink } from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className="navigation">
       
      <div className="navbar">
        <div className="left">
            <h6 className="pulse">Pulse</h6>
            <span className="dot">.</span>
        </div>
        <div className="main">
          <ul className="pages">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/addpages"}>Add Pages</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink>About Us</NavLink></li>
          </ul>
          <div className="bars"><i className="fa-solid fa-bars"></i></div>
        </div>
        <div className="right">
            <span className="reserv">Reservations</span>
            <span><i className="fa-solid fa-phone"></i></span>
            <span> 652-345 3222 11</span>
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
}

export default Navbar;
