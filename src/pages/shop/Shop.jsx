import "./Shop.css";
import bio from "../../assets/img/biodegradable 1.svg";
import detox from "../../assets/img/detox 1.svg";
import keto from "../../assets/img/keto 1.svg";
import cereal from "../../assets/img/cereal 1.svg";
import salad from "../../assets/img/salad 1.svg";
import vitamin from "../../assets/img/vitamin 1.svg";
import { useNavigate } from "react-router-dom";
const Filter = () => {
  const boxes = [
    {
      img: bio,
      alt: "biodegradable",
      text: "ბიო საკვები",
      category: "Bio",
    },
    {
      img: detox,
      alt: "detox",
      text: "დეტოქსი",
      category: "Detox",
    },
    {
      img: keto,
      alt: "keto",
      text: "დიაბეტური კეტო დიეტა",
      category: "Diabet",
    },
    {
      img: cereal,
      alt: "shop",
      text: "სახლის ჰიგიენა სარეცხი სითხეები",
      category: "Hygien",
    },
    {
      img: salad,
      alt: "salad",
      text: "სუპერფუდი",
      category: "Superfood",
    },
    {
      img: vitamin,
      alt: "vitamin",
      text: "ვიტამინები",
      category: "Vitamin",
    },
  ];
  const navigate = useNavigate();
  const handleNavigateToProductList = (category) => {
    navigate(`/products`);
  };
  return (
    <>
      <section className="shop-section">
        <div className="box-container flex shop-content">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="box"
              onClick={() => handleNavigateToProductList(box.category)}
            >
              <img
                src={box.img}
                alt={box.alt}
                className="shop white-on-hover"
              />
              <h2>{box.text}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Filter;
