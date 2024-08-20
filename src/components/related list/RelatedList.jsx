import "./RelatedList.css";
import plusIcon from "../../assets/img/add.svg";
import { Link, NavLink } from "react-router-dom";
const RelatedList = ({ relatedProducts }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!relatedProducts.length) {
    return null;
  }
  const getDiscountedPrice = (product) => {
    if (
      product.discount &&
      typeof product.discount === "number" &&
      product.price &&
      typeof product.price === "number"
    ) {
      return product.price - product.price * (product.discount / 100);
    }
    return product.price || 0;
  };
  return (
    <>
      <section className="related-products-section">
        <h2>
          <span className="first-letter">მ</span>სგავსი
        </h2>
        <div className="related-container">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="product"
              onClick={handleLinkClick}
            >
              <div className="plus">
                <img src={plusIcon} alt="" />
              </div>
              <div className="product-image-container">
                <img src={relatedProduct.image} alt="" />
              </div>
              <div className="product-body">
                <p className="price">
                  {relatedProduct.discount ? (
                    <>
                      {getDiscountedPrice(relatedProduct).toFixed(2)}
                      <i className="fa-solid fa-lari-sign"></i>
                      <span>
                        {relatedProduct.discount}
                        <i className="fa-solid fa-lari-sign"></i>
                      </span>
                    </>
                  ) : (
                    <>
                      {relatedProduct.price}
                      <i className="fa-solid fa-lari-sign"></i>
                    </>
                  )}
                </p>
                <p className="title">{relatedProduct.title}</p>
                <Link
                  to={`/product/${relatedProduct.id}`}
                  className="detail-btn"
                >
                  ვრცლად
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RelatedList;
