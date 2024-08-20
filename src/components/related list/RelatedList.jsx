import "./RelatedList.css";
import { Link, NavLink } from "react-router-dom";
const RelatedList = ({ relatedProducts }) => {
    
  return (
    <>
      <section>
        <h2>მსგავსი</h2>
        <div>
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id}>
              <div>
                <img src={relatedProduct.image} alt="" />
              </div>
              <div className="text">
                <p>{relatedProduct.category}</p>
                <Link to={`/product/${relatedProduct.id}`} onClick={handleLinkClick}>
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
