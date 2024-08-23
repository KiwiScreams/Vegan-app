import "./WishList.css";
import { useState, useEffect } from "react";

const WishList = ({ wishlist }) => {
  const [isWishlistVisible, setIsWishlistVisible] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);

  const handleWishBtnClick = (product) => {
    setAddedProducts([...addedProducts, product]);
  };

  const handleDeleteProduct = (product) => {
    setAddedProducts(addedProducts.filter((item) => item !== product));
  };

  const toggleWishlist = () => {
    setIsWishlistVisible(!isWishlistVisible);
    if (!isWishlistVisible) {
      wishlist.forEach((product) => {
        if (!addedProducts.includes(product)) {
          setAddedProducts([...addedProducts, product]);
        }
      });
    }
  };

  return (
    <>
      <section className="wishlist-section">
        <button className="wish-btn" onClick={() => toggleWishlist()}>
          <i className="fa-regular fa-heart"></i>
        </button>
        {isWishlistVisible && (
          <div
            className={`wishlist ${isWishlistVisible ? "visible" : "hidden"}`}
          >
            <h2>My Wishlist</h2>
            <ul>
              {addedProducts.map((product, index) => (
                <li key={index} className="wish-item flex">
                  <div className="wish-image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="flex">
                    <h3>{product.title}</h3>
                    <p>
                      ფასი: {product.price.toFixed(2)}
                      <i className="fa-solid fa-lari-sign"></i>
                    </p>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteProduct(product)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default WishList;
