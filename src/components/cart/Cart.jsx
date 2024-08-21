import React from "react";

const Cart = ({ cartItems, onQuantityChange, onDelete }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>
            <span>{item.title}</span>
            <span>
              Quantity:{" "}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  onQuantityChange(idx, parseInt(e.target.value, 10))
                }
              />
              <button
                className="plus-btn"
                onClick={() => onQuantityChange(idx, item.quantity + 1)}
              >
                +
              </button>
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
              <button className="delete-btn" onClick={() => onDelete(idx)}>
                Delete
              </button>
            </span>
            <span>{(item.price * item.quantity).toFixed(2)} ₾</span>
          </li>
        ))}
      </ul>
      <p>Total: {totalPrice.toFixed(2)} ₾</p>
    </div>
  );
};

export default Cart;
