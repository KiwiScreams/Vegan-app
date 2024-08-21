import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = ({ cartItems, onQuantityChange, onDelete }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [isCartVisible, setIsCartVisible] = useState(true);
  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      {isCartVisible && (
        <section className="cart-section">
          <h2>Vegan | Cart</h2>
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
                  <i class="fa-solid fa-delete-left"></i>
                </button>
                <span>{(item.price * item.quantity).toFixed(2)} ₾</span>
              </li>
            ))}
          </ul>
          <p className="total-price">Total: {totalPrice.toFixed(2)} ₾</p>
        </section>
      )}
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "#ffffff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleToggleCart}
      >
        {isCartVisible ? "Hide Cart" : "Show Cart"}
      </button>
    </div>
  );
};

export default Cart;
