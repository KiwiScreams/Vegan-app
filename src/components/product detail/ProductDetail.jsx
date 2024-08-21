import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { useState, useEffect } from "react";
import RelatedList from "../related list/RelatedList";
import Cart from "../cart/Cart";
const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((product) => product.id === productId);
  const [cartItems, setCartItems] = useState([]);

  const relatedProducts = products
    .filter((relatedProduct) => {
      if (relatedProduct.id === productId) return false;
      return product.category.some((cat) =>
        relatedProduct.category.includes(cat)
      );
    })
    .filter((relatedProduct) => relatedProduct.category.length > 0);
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };
  const handleQuantityChange = (idx, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, index) =>
        index === idx ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleDelete = (idx) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item, index) => index !== idx)
    );
  };
  return (
    <>
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
            {product.discount > 0 ? (
              <p className="old-price">
                ძველი ფასი: {product.price.toFixed(2)}
                <i className="fa-solid fa-lari-sign"></i>
              </p>
            ) : (
              <></>
            )}
            <p className="description">{product.description}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart">კალათაში დამატება</button>
          </div>
        </div>
      </section>
      <RelatedList relatedProducts={relatedProducts} />
      <Cart
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ProductDetail;
