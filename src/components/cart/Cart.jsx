import "./Cart.css";
import React from "react";
const Cart = ({ cartItems }) => {
  return (
    <>
      <div>
        <h1>CART</h1>
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
