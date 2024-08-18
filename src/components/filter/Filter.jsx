import "./Filter.css";
import bio from "../../assets/img/biodegradable 1.svg";
import detox from "../../assets/img/detox 1.svg";
import keto from "../../assets/img/keto 1.svg";
import shop from "../../assets/img/shop.svg";
import salad from "../../assets/img/salad 1.svg";
import vitamin from "../../assets/img/vitamin 1.svg";
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
      img: shop,
      alt: "shop",
      text: "სახლის ჰიგიენა<br/>სარეცხი სითხეები",
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
  return (
    <>
      <section className="filter-section ou">
        <h2>გვესტუმრეთ ფილიალში</h2>
        <div className="box-container flex shop-content">
          {boxes.map((box, index) => (
            <div key={index} className="box white-on-hover">
              <img
                src={box.img}
                alt={box.alt}
                className="shop white-on-hover"
              />
              <p>{box.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Filter;
