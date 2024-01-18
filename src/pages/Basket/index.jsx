import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import "./index.scss"

function Basket() {
  const { basket, increase, decrease, removeBasket } =
    useContext(BasketContext);
  return (
    <div className="basketPage">
      <div className="card">
        {basket.map((x) => (
          <ul className="pages">
            <li className="name">{x.name}</li>
            <div className="descPrice"><li className="desc">{x.desc}</li>
            <li className="price">${x.price}.00</li></div>
            <button onClick={()=>increase(x)}>increase</button>
            <div>{x.count}</div>
            <button onClick={()=>decrease(x)}>decrease</button>
            <button onClick={()=>removeBasket(x)}>remove</button>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Basket;
