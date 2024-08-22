import "./CheckOut.css";
const CheckOut = () => {
  return (
    <>
      <div className="dark-screen">
        <section className="checkout-section">
          <h2>
            <span className="first-letter">ბ</span>არათის დამატება
          </h2>
          <div className="checkout-container">
            <div className="container user-info-container">
              <div className="input-container">
                <div className="label-container">
                  <i class="fa-solid fa-user"></i>
                  <label htmlFor="fullname">სახელი | გვარი</label>
                </div>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="შეიყვანეთ თქვენი სახელი და გვარი"
                />
              </div>
              <div className="input-container">
                <div className="label-container">
                  <i class="fa-solid fa-envelope"></i>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@gmail.com"
                />
              </div>
              <div className="input-container">
                <div className="label-container">
                  <i class="fa-regular fa-address-card"></i>
                  <label htmlFor="address">მისამართი</label>
                </div>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="შეიყვანეთ თქვენი მისამართი"
                />
              </div>
            </div>
            <div className="container payment-container">
              <div className="cards-container flex">
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-paypal"></i>
                <i class="fa-brands fa-cc-discover"></i>
              </div>
              <div className="input-container">
                <div className="label-container">
                  <label htmlFor="card-fullname">ბარათის დასახელება</label>
                </div>
                <input
                  type="text"
                  name="card-fullname"
                  id="card-fullname"
                  placeholder="შეიყვანეთ ბარათის დასახელება"
                />
              </div>
              <div className="input-container">
                <div className="label-container">
                  <label htmlFor="card-number">ბარათის ნომერი</label>
                </div>
                <input
                  type="number"
                  name="card-number"
                  id="card-number"
                  placeholder="შეიყვანეთ ბარათის ნომერი"
                />
              </div>
            </div>
          </div>
          <button>OK</button>
        </section>
      </div>
    </>
  );
};

export default CheckOut;
