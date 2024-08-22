import "./CartButton.css";
const CartButton = ({ handleToggleCart, isCartOpen }) => {
  return (
    <>
      <button onClick={handleToggleCart} className="cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </>
  );
};

export default CartButton;
