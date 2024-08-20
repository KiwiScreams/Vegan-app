import "./RelatedList.css";
import { Link, NavLink } from "react-router-dom";
const RelatedList = ({ relatedProducts }) => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!relatedProducts.length) {
    return null;
  }
  return (
    <>
      <section>
        <h2>მსგავსი</h2>
        <div>
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id}>
              <p>{relatedProduct.title}</p>
              <div>
                <img src={relatedProduct.image} alt="" />
              </div>
              <div className="text">
                <p>{relatedProduct.category}</p>
                <Link
                  to={`/product/${relatedProduct.id}`}
                  onClick={handleLinkClick}
                >
                  სრულად ნახვა
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
