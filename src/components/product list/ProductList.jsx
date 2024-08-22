import { useState, useEffect } from "react";
import { products } from "../../data/data";
import plusIcon from "../../assets/img/add.svg";
import { Link, NavLink } from "react-router-dom";
import "./ProductList.css";
import Cart from "../cart/Cart";
import Panel from "../panel/Panel";

const ProductList = ({ onAddToCart }) => {
  const updatedProducts = products.map((product) => ({
    ...product,
    categories: Array.isArray(product.category)
      ? product.category
      : [product.category],
  }));
  const [showPanel, setShowPanel] = useState(false);
  const [cartMessage, setCartMessage] = useState("ghj");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(updatedProducts);
  let filters = [
    { category: "Bio", label: "ბიო საკვები" },
    { category: "Detox", label: "დეტოქსი" },
    { category: "Superfood", label: "სუპერფუდი" },
    { category: "Vitamin", label: "ვიტამინები" },
    { category: "Diabet", label: "დიაბეტური კეტო დიეტა" },
    { category: "Hygiene", label: "სახლის ჰიგიენა სარეცხი სითხეები" },
  ];
  const categoryMap = filters.reduce((acc, curr) => {
    acc[curr.category] = curr.label;
    return acc;
  }, {});
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const handleAddToCart = (item) => {
    onAddToCart(item);
    setCartMessage("Product is added!");
    setShowPanel(true);
  };
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const filteredItems = updatedProducts.filter((blog) => {
        return selectedFilters.every((filter) =>
          blog.categories.includes(filter)
        );
      });
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(updatedProducts);
    }
  };
  const getDiscountedPrice = (product) => {
    if (product.discount) {
      return product.price - product.price * (product.discount / 100);
    }
    return product.price;
  };
  return (
    <>
      <section className="product-list-section">
        <section className="products-section">
          <div className="hidden-cube"></div>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div key={`blogs-${idx}`} className="product">
                <div className="plus" onClick={() => handleAddToCart(item)}>
                  <img src={plusIcon} alt="" />
                </div>
                <div className="product-image-container">
                  <img src={item.image} alt="" />
                </div>
                <div className="product-body">
                  <p className="price">
                    {item.discount ? (
                      <>
                        {getDiscountedPrice(item).toFixed(2)}
                        <i className="fa-solid fa-lari-sign"></i>
                        <span>
                          {item.price.toFixed(2)}
                          <i className="fa-solid fa-lari-sign"></i>
                        </span>
                      </>
                    ) : (
                      <>
                        {item.price.toFixed(2)}
                        <i className="fa-solid fa-lari-sign"></i>
                      </>
                    )}
                  </p>
                  <p className="title">{item.title}</p>
                  <Link to={`/product/${item.id}`} className="detail-btn">
                    ვრცლად
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-category">ასეთი პროდუქტი არ არსებობს</p>
          )}
        </section>
        <ul className="multi-filter-section">
          {filters.map((filter, idx) => (
            <li
              onClick={() => handleFilterButtonClick(filter.category)}
              className={`button ${
                selectedFilters?.includes(filter.category)
                  ? "active-filter"
                  : ""
              }`}
              key={`filters-${idx}`}
            >
              {filter.label}
            </li>
          ))}
        </ul>
      </section>
        <Panel show={showPanel} message={cartMessage} />
    </>
  );
};

export default ProductList;
