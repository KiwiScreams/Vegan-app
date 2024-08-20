import { useState, useEffect } from "react";
import { products } from "../../data/data";
import { Link, NavLink } from "react-router-dom";
const ProductList = () => {
  const updatedProducts = products.map((product) => ({
    ...product,
    categories: Array.isArray(product.category)
      ? product.category
      : [product.category],
  }));
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
  const getCategoryClassName = (category) => {
    const filter = filters.find((filter) => filter.category === category);
    return `category-${filters.indexOf(filter) + 1}`;
  };
  return (
    <>
      <section>
        <section>
          {filters.map((filter, idx) => (
            <button
              onClick={() => handleFilterButtonClick(filter.category)}
              className={`button ${
                selectedFilters?.includes(filter.category)
                  ? "active-filter"
                  : ""
              }`}
              key={`filters-${idx}`}
            >
              {filter.label}
            </button>
          ))}
        </section>

        <section>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div key={`blogs-${idx}`}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <Link to={`/product/${item.id}`}>სრულად ნახვა</Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-category">ასეთი პროდუქტი არ არსებობს</p>
          )}
        </section>
      </section>
    </>
  );
};

export default ProductList;
