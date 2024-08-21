import "./Cart.css";
import React from "react";

const Cart = ({ cartItems, onQuantityChange }) => {
  return (
    <>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx}>
              <span>{item.title}</span>
              <span>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    onQuantityChange(idx, parseInt(e.target.value, 10))
                  }
                />
              </span>
              <span>{(item.price * item.quantity).toFixed(2)} ₾</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
