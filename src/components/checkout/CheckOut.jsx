import "./CheckOut.css";
const CheckOut = () => {
  return (
    <>
      <section className="checkout-section">
        <h1>ბარათის დამატება</h1>
        <div className="checkout-container flex">
          <div className="container user-info-container">
            <div className="input-container">
              <div className="label-container">
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="input-container">
              <div className="label-container">
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="input-container">
              <div className="label-container">
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="input-container">
              <div className="label-container">
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
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
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="input-container">
              <div className="label-container">
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
            </div>
            <div className="input-container">
              <div className="label-container">
                <i class="fa-solid fa-user"></i>
                <label htmlFor="fullname"></label>
              </div>
              <input type="text" name="fullname" id="fullname" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
