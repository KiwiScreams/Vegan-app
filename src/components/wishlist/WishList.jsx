import "./WishList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WishList = ({ wishlist }) => {
  const [isWishlistVisible, setIsWishlistVisible] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const navigate = useNavigate();
  const handleMouseOut = () => {
    setIsHovered(false);
  };
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
  useEffect(() => {
    if (isWishlistVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isWishlistVisible]);
  const navigateToProductDetailPage = (product) => {
    const productId = product.id;
    const productSlug = product.slug;
    navigate(`/product/${productId}`);
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
                  <div className="flex">
                    <h3>{product.title}</h3>
                    <p>
                      ფასი: {product.price.toFixed(2)}
                      <i className="fa-solid fa-lari-sign"></i>
                    </p>
                  </div>
                  <button
                    className="delete-btn"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={() => handleDeleteProduct(product)}
                  >
                    <i
                      className={
                        isHovered ? "fa-regular fa-heart" : "fa-solid fa-heart"
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
