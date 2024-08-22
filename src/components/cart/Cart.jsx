import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import Panel from "../panel/Panel";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = ({ cartItems, onQuantityChange, onRemoveItem, totalPrice }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleToggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  const navigate = useNavigate();
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
  const handleClearCart = () => {
    cartItems.forEach((item) => {
      onRemoveItem(item);
    });
  };
  useEffect(() => {
    if (isConfirmDeleteVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isConfirmDeleteVisible]);
  const handleCheckOut = () => {
    console.log("check out");
    navigate("/checkout");
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
            <div>
              <ul>
                <div className="flex top">
                  <p className="products-quantity">
                    შენს კალათაში {cartQuantity} პროდუქტია
                  </p>
                  <button onClick={handleClearCart}>კალათის გასუფთავება</button>
                </div>
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
              <div className="flex bottom">
                <button onClick={handleCheckOut}>შემდეგი</button>
                <p className="total-price">თანხა: {totalPrice.toFixed(2)} ₾</p>
              </div>
            </div>
          )}
        </section>
      )}
      {isConfirmDeleteVisible && (
        <section className="dark-screen">
          <div className="confirm-delete-section">
            <div onClick={handleCancelDelete} className="change cancel">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <h2>პროდუქტის ამოშლა</h2>
            <p>დარწმუნებული ხართ, რომ გსურთ ამ პროდუქტის წაშლა?</p>
            <div className="buttons">
              <button onClick={handleConfirmDelete}>დიახ</button>
              <button onClick={handleCancelDelete}>არა</button>
            </div>
          </div>
        </section>
      )}
      <button onClick={handleToggleCart} className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
};

export default Cart;
