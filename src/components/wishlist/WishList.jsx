import "./WishList.css";
const WishList = ({ wishlist }) => {
  return (
    <>
      <section className="wishlist-section">
        <div className="wishlist">
          <h2>My Wishlist</h2>
          <ul>
            {wishlist &&
              wishlist.map((product, index) => (
                <li key={index}>
                  <img src={product.image} alt="" />
                  <div>
                    <h3>{product.title}</h3>
                    <p>
                      ფასი: {product.price.toFixed(2)}
                      <i className="fa-solid fa-lari-sign"></i>
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <button className="wish-btn">
          <i className="fa-regular fa-heart"></i>
        </button>
      </section>
    </>
  );
};

export default WishList;
