import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { useState, useEffect } from "react";
import RelatedList from "../related list/RelatedList";
const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((product) => product.id === productId);

  const relatedProducts = products
    .filter((relatedProduct) => {
      if (relatedProduct.id === productId) return false;
      return product.category.some((cat) =>
        relatedProduct.category.includes(cat)
      );
    })
    .filter((relatedProduct) => relatedProduct.category.length > 0);
  return (
    <>
      <section className="product-detail-section">
        <div className="detail-container">
          <div className="image-container">
            <img src={product.image} alt="" />
            <div className="discount-text">
                <p>-{product.discount}%</p>
            </div>
          </div>
          <div className="detail-info-container">
            <h1>{product.title}</h1>
            <p className="price">
              ფასი:
              <span>
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2)}
                <i className="fa-solid fa-lari-sign"></i>
              </span>
            </p>
            <p className="description">{product.description}</p>
          </div>
        </div>
      </section>
      <RelatedList relatedProducts={relatedProducts} />
    </>
  );
};

export default ProductDetail;
