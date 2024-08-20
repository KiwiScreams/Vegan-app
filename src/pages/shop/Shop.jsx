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
    },
    {
      img: detox,
      alt: "detox",
      text: "დეტოქსი",
    },
    {
      img: keto,
      alt: "keto",
      text: "დიაბეტური კეტო დიეტა",
    },
    {
      img: cereal,
      alt: "shop",
      text: "სახლის ჰიგიენა სარეცხი სითხეები",
    },
    {
      img: salad,
      alt: "salad",
      text: "სუპერფუდი",
    },
    {
      img: vitamin,
      alt: "vitamin",
      text: "ვიტამინები",
    },
  ];
  const navigate = useNavigate();
  const handleNavigateToProductList = () =>
  {
    navigate("/products");
  }
  return (
    <>
      <section className="filter-section ou">
        <div className="box-container flex shop-content" onClick={handleNavigateToProductList}>
          {boxes.map((box, index) => (
            <div key={index} className="box">
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
