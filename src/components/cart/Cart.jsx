import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = ({ cartItems, onQuantityChange, onDelete }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      {isCartVisible && (
        <section className="cart-section">
          <h2>Vegan | კალათა</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">
              კალათა ცარიელია <i className="fa-solid fa-cart-shopping"></i>
            </p>
          ) : (
            <ul>
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex">
                  <div className="cart-image">
                    <img src={item.image} alt="" />
                  </div>
                  <span className="title">{item.title}</span>
                  <div className="buttons">
                    <button
                      className="plus-btn"
                      onClick={() => onQuantityChange(idx, item.quantity + 1)}
                    >
                      +
                    </button>
                    <span id="quantity">{item.quantity}</span>
                    <button
                      className="minus-btn"
                      onClick={() => {
                        const newQuantity = item.quantity - 1;
                        if (newQuantity < 1) {
                          onDelete(idx);
                        } else {
                          onQuantityChange(idx, newQuantity);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button className="delete-btn" onClick={() => onDelete(idx)}>
                    <i className="fa-solid fa-delete-left"></i>
                  </button>
                  <span>{(item.price * item.quantity).toFixed(2)} ₾</span>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <p className="total-price">Total: {totalPrice.toFixed(2)} ₾</p>
          )}
        </section>
      )}
      <button onClick={handleToggleCart} className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
};

export default Cart;
