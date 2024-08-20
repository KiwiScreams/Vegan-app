import "./RelatedList.css";
import { Link, NavLink } from "react-router-dom";
const RelatedList = ({ relatedList }) => {
  return (
    <>
      <section>
        <h2>მსგავსი</h2>
        <div>
          {relatedBlogs.map((relatedBlog) => (
            <div key={relatedBlog.id}>
              <div>
                <img src={relatedBlog.image} alt="" />
              </div>
              <div className="text">
                <p>{relatedBlog.category}</p>
                <Link to={`/product/${relatedBlog.id}`} onClick={handleLinkClick}>
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
