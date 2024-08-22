import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import Panel from "../panel/Panel";

const Cart = ({ cartItems, onQuantityChange, onRemoveItem, totalPrice }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  const [isConfirmDeleteVisible, setIsConfirmDeleteVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const getDiscountedPrice = (item) => {
    return item.discount
      ? item.price - (item.price * item.discount) / 100
      : item.price;
  };
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const handleDeleteItem = (item) => {
    console.log("handleDeleteItem called", item);
    setItemToDelete(item);
    setIsConfirmDeleteVisible(true);
  };

  const handleConfirmDelete = () => {
    onRemoveItem(itemToDelete);
    setIsConfirmDeleteVisible(false);
    setItemToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsConfirmDeleteVisible(false);
    setItemToDelete(null);
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
              <p className="products-quantity">
                შენს კალათაში {cartQuantity} პროდუქტია
              </p>
              {cartItems.map((item, idx) => (
                <li key={idx}>
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
                      <span>{item.quantity}</span>
                    </span>
                    <button
                      className="minus-btn"
                      onClick={() => {
                        const newQuantity = item.quantity - 1;
                        if (newQuantity < 1) {
                          handleDeleteItem(item);
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
                    onClick={() => handleDeleteItem(item)}
                  >
                    <i className="fa-solid fa-delete-left"></i>
                  </button>
                  <span className="total-item-price">
                    {(getDiscountedPrice(item) * item.quantity).toFixed(2)} ₾
                  </span>
                </li>
              ))}
            </ul>
          )}
          <p className="total-price">თანხა: {totalPrice.toFixed(2)} ₾</p>
        </section>
      )}
      {isConfirmDeleteVisible && (
        <section className="confirm-delete">
          <h2>დაადასტურე წაშლა</h2>
          <p>დარწმუნებული ხართ, რომ გსურთ ამ პროდუქტის წაშლა?</p>
          <button onClick={handleConfirmDelete}>დიახ</button>
          <button onClick={handleCancelDelete}>არა</button>
        </section>
      )}
      <button onClick={handleToggleCart} className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
};

export default Cart;
