import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import "./index.scss"

function Wishlist() {
  const { addWishlist, wishlist,isWishlist } = useContext(WishlistContext);
  return (
    <div className="wishlistPage">
      <div className="card">
        {wishlist.map((x) => (
          <ul key={x._id} className="pages">
            <li className="name">{x.name}</li>
            <div className="descPrice"><li className="desc">{x.desc}</li>
            <li className="price">${x.price}.00</li></div>
            <i onClick={()=>addWishlist(x)} className={`fa-solid fa-heart ${isWishlist(x)? "red" :"" }  `}></i>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
