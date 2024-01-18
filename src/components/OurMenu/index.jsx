import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";

function OurMenu() {
  const [dish, setDish] = useState([]);
  const {addBasket} = useContext(BasketContext)
  const {isWishlist,addWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setDish(data));
  }, []);

  return (
    <div className="ourMenu">
      <div className="ourMenuAll">
        <div className="icon">
        <i className="fa-solid fa-cheese"></i>
        </div>
        <div className="head">
          <div className="borderLeft"></div>
          <h3 className="main">Our Menu</h3>
          <div className="borderRight"></div>
        </div>
        <div className="menu">
          <span>Breakfest</span>
          <span>Brunch</span>
          <span>Lunch</span>
          <span>Dinner</span>
        </div>
        <div className="dishes">
          {dish.map((x) => (
            <ul key={x._id} className="pages">
              <li className="name">{x.name}</li>
              <div className="descPrice">
                <li className="desc">{x.desc}...............................</li>
                
                <li className="price">${x.price}.00</li>
              </div>
                <div className="wishBasket">
                <button onClick={()=>addBasket(x)}>Add to Basket</button>
                <i onClick={()=>addWishlist(x)} className={`fa-solid fa-heart ${isWishlist(x)? "red" :"" }  `}></i>
                <div><NavLink to={"/detail/"+x._id}>Go to learn More</NavLink></div>
                </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
