import "./WishList.css";
import { useState, useEffect } from "react";
const WishList = ({ wishlist }) => {
  const [isWishlistVisible, setIsWishlistVisible] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]); // new state variable

  const handleWishBtnClick = (product) => {
    if (!addedProducts.includes(product)) {
      setAddedProducts([...addedProducts, product]);
    }
    setIsWishlistVisible(true);
  };
  return (
    <>
      <section className="wishlist-section">
        {isWishlistVisible && (
          <div className="wishlist">
            <h2>My Wishlist</h2>
            <ul>
              {addedProducts.map((product, index) => (
                <li key={index}>
                  <img src={product.image} alt="" />
                  <div>
                    <h3>{product.title}</h3>
                    <p>
                      ფასი: {product.price.toFixed(2)}
                      <i className="fa-solid fa-lari-sign"></i>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {wishlist.map((product, index) => (
          <button
            key={index}
            className="wish-btn"
            onClick={() => handleWishBtnClick(product)}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        ))}
      </section>
    </>
  );
};

export default WishList;
