import "./Stores.css";
import storeImage from "../../assets/img/shop.svg";
import locationImage from "../../assets/img/placeholder 1.svg";
const Stores = () => {
  return (
    <>
      <section className="stores-section">
        <div className="store-content">
          <h2>გვესტუმრეთ ფილიალში</h2>
          <div class="store-container flex">
            <div class="store-box">
              <img src={storeImage} alt="shop" class="shop white-on-hover" />
              <p>
                თბილისი
                <br />
                ი. აბაშიძის 56
              </p>
              <img src={locationImage} alt="location" class="location" />
            </div>
            <div class="store-box">
              <img src={storeImage} alt="shop" class="shop white-on-hover" />
              <p>
                თბილისი
                <br />
                ი. აბაშიძის 56
              </p>
              <img src={locationImage} alt="location" class="location" />
            </div>
            <div class="store-box">
              <img src={storeImage} alt="shop" class="shop white-on-hover" />
              <p>
                თბილისი
                <br />
                ი. აბაშიძის 56
              </p>
              <img src={locationImage} alt="location" class="location" />
            </div>
            <div class="store-box">
              <img src={storeImage} alt="shop" class="shop white-on-hover" />
              <p>
                თბილისი
                <br />
                ი. აბაშიძის 56
              </p>
              <img src={locationImage} alt="location" class="location" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stores;
