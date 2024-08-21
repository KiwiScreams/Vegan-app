import { useState, useEffect } from "react";
import { products } from "../../data/data";
import plusIcon from "../../assets/img/add.svg";
import { Link, NavLink } from "react-router-dom";
import "./ProductList.css";
import Cart from "../cart/Cart";
const ProductList = () => {
  const updatedProducts = products.map((product) => ({
    ...product,
    categories: Array.isArray(product.category)
      ? product.category
      : [product.category],
  }));
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(updatedProducts);
  const [cartItems, setCartItems] = useState([]);
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
    setCartItems((prevCartItems) =>
      prevCartItems.map((item, index) =>
        index === idx ? { ...item, quantity: newQuantity } : item
      )
    );
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
      <Cart cartItems={cartItems} onQuantityChange={handleQuantityChange} />
    </>
  );
};

export default ProductList;
