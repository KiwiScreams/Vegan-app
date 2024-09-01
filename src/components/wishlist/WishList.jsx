import "./WishList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const WishList = ({ wishlist }) => {
  const [isWishlistVisible, setIsWishlistVisible] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const [hoveredItems, setHoveredItems] = useState({});
  const handleMouseOver = (index) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [index]: true,
    }));
  };
  const handleMouseOut = (index) => {
    setHoveredItems((prevHoveredItems) => ({
      ...prevHoveredItems,
      [index]: false,
    }));
  };

  const navigate = useNavigate();

  const handleWishBtnClick = (product) => {
    setAddedProducts((prevAddedProducts) => [...prevAddedProducts, product]);
  };

  const handleDeleteProduct = (product) => {
    setAddedProducts((prevAddedProducts) =>
      prevAddedProducts.filter((item) => item.id !== product.id)
    );
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

  useEffect(() => {
    if (isWishlistVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isWishlistVisible]);

  const navigateToProductDetailPage = (product) => {
    const productId = product.id;
    navigate(`/product/${productId}`);
  };

  return (
    <>
        <section className="wishlist-section">
          <button className="wish-btn" onClick={toggleWishlist}>
            <i className="fa-regular fa-heart"></i>
          </button>
          {isWishlistVisible && (
            <div
              className={`wishlist ${isWishlistVisible ? "visible" : "hidden"}`}
            >
              <h2>Vegan | Wishlist</h2>
              <ul>
                {addedProducts.map((product, index) => (
                  <li
                    key={index}
                    className="wish-item flex"
                    onClick={() => navigateToProductDetailPage(product)}
                  >
                    <div className="wish-image">
                      <img src={product.image} alt="" />
                    </div>
                    <h3>{product.title}</h3>
                    <button
                      className="delete-btn"
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={() => handleMouseOut(index)}
                      onClick={() => handleDeleteProduct(product)}
                    >
                      <i
                        className={
                          hoveredItems[index]
                            ? "fa-regular fa-heart"
                            : "fa-solid fa-heart"
                        }
                      ></i>
                    </button>
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
