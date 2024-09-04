import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { useState, useEffect } from "react";
import RelatedList from "../related list/RelatedList";
import Cart from "../cart/Cart";
import Panel from "../panel/Panel";
import WishList from "../wishlist/WishList";
import Loader from "../loader/Loader";
const ProductDetail = ({ onAddToCart, onAddToWishList }) => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((product) => product.id === productId);
  const [showPanel, setShowPanel] = useState(false);
  const [cardMessage, setCardMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const relatedProducts = products
    .filter((relatedProduct) => {
      if (relatedProduct.id === productId) return false;
      return product.category.some((cat) =>
        relatedProduct.category.includes(cat)
      );
    })
    .filter((relatedProduct) => relatedProduct.category.length > 0);
  const handleAddToCart = (item) => {
    onAddToCart(item);
    setCardMessage(`თქვენ დაამატეთ ${item.title} თქვენს კალათაში`);
    setShowPanel(true);
    setTimeout(() => {
      setShowPanel(false);
    }, 3000);
  };
  const handleAddToWishList = (item) => {
    onAddToWishList(item);
    setCardMessage(`თქვენ დაამატეთ ${item.title} Wish List-ში`);
    setShowPanel(true);
    setTimeout(() => {
      setShowPanel(false);
    }, 3000);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const handleHeartMouseOver = () => {
    setIsHeartHovered(true);
  };

  const handleHeartMouseOut = () => {
    setIsHeartHovered(false);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="product-detail-section">
          <div className="detail-container">
            <div className="image-container">
              <img src={product.image} alt="" />
              {product.discount > 0 && (
                <div className="discount-text">
                  <p>-{product.discount}%</p>
                </div>
              )}
            </div>
            <div className="detail-info-container">
              <h1>
                <span className="first-letter">{product.title.charAt(0)}</span>
                {product.title.slice(1)}
              </h1>
              <div className="flex">
                <p className="price">
                  ფასი:
                  <span>
                    {product.discount > 0
                      ? (
                          product.price -
                          (product.price * product.discount) / 100
                        ).toFixed(2)
                      : product.price.toFixed(2)}
                    <i className="fa-solid fa-lari-sign"></i>
                  </span>
                </p>
                <div className="grade flex">
                  <i
                    className={`fa-star ${
                      isHovered ? "fa-solid" : "fa-regular"
                    }`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  ></i>
                  <p>{product.grade}</p>
                </div>
              </div>
              {product.discount > 0 ? (
                <p className="old-price">
                  ძველი ფასი: {product.price.toFixed(2)}
                  <i className="fa-solid fa-lari-sign"></i>
                </p>
              ) : (
                <></>
              )}
              <p className="description">{product.description}</p>
              <div className="flex add-list-container">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart"
                >
                  კალათაში დამატება
                </button>

                <button
                  onClick={() => handleAddToWishList(product)}
                  className="wishlist-btn"
                  onMouseOver={handleHeartMouseOver}
                  onMouseOut={handleHeartMouseOut}
                >
                  <i
                    className={`fa-${
                      isHeartHovered ? "solid" : "regular"
                    } fa-heart`}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      <RelatedList relatedProducts={relatedProducts} />
      <Panel show={showPanel} message={cardMessage} />
    </>
  );
};

export default ProductDetail;
