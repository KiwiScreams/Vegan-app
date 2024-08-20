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
      <section>
        <div>
          <img src={product.image} alt="" />
        </div>
        <div>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </section>
      <RelatedList relatedProducts={relatedProducts} />
    </>
  );
};

export default ProductDetail;
