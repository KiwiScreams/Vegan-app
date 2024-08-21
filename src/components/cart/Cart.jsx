import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = ({ cartItems, onQuantityChange, onRemoveItem, totalPrice }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);

  };
  const getDiscountedPrice = (item) => {
    return item.discount
      ? item.price - (item.price * item.discount) / 100
      : item.price;
  };
  return (
    <div>
      {isCartVisible && (
        <section
          className={`cart-section ${isCartVisible ? "visible" : "hidden"}`}
        >
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
                    <span id="quantity">
                      <span>
                        {(getDiscountedPrice(item) * item.quantity).toFixed(2)}₾
                      </span>
                    </span>
                    <button
                      className="minus-btn"
                      onClick={() => {
                        const newQuantity = item.quantity - 1;
                        if (newQuantity < 1) {
                          onRemoveItem(item);
                        } else {
                          onQuantityChange(idx, newQuantity);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => onRemoveItem(item)}
                  >
                    <i className="fa-solid fa-delete-left"></i>
                  </button>
                  {cartItems.length > 0 && (
                    <p className="total-price">
                      Total: {totalPrice.toFixed(2)} ₾
                    </p>
                  )}
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
