import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { useState, useEffect } from "react";
import RelatedList from "../related list/RelatedList";
const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((product) => product.id === productId);
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
      <RelatedList relatedList={relatedList}/>
    </>
  );
};

export default ProductDetail;
