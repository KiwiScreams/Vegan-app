import "./Stores.css";
import storeImage from "../../assets/img/shop.svg";
import locationImage from "../../assets/img/placeholder 1.svg";
import online from "../../assets/img/laptop 1.png";
const Stores = () => {
  const storesData = [
    {
      city: "თბილისი",
      address: "ი. აბაშიძის 56",
    },
    {
      city: "თბილისი",
      address: "ი. აბაშიძის 56",
    },
    {
      city: "თბილისი",
      address: "ი. აბაშიძის 56",
    },
    {
      city: "თბილისი",
      address: "ი. აბაშიძის 56",
    },
  ];
  return (
    <>
      <section className="stores-section">
        <div className="store-content">
          <h2>გვესტუმრეთ ფილიალში</h2>
          <div class="store-container flex">
            {storesData.map((store, index) => (
              <div key={index} className="store-box">
                <img
                  src={storeImage}
                  alt="store"
                  className="store white-on-hover"
                />
                <p>
                  {store.city}
                  <br />
                  {store.address}
                </p>
                <img src={locationImage} alt="location" className="location" />
              </div>
            ))}
          </div>
          <h2>ან შეიძინეთ პროდუქცია ონლაინ</h2>
          <button>
            <img src={online} alt="online" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Stores;
