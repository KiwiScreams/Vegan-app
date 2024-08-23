import "./CheckOut.css";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const CheckOut = () => {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    address: "",
    cardFullname: "",
    cardNumber: "",
  });
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      navigate("/");
      // window.location.reload();
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.fullname) {
      errors.fullname = "სახელი და გვარი აუცილებელია";
    }
    if (!formValues.email) {
      errors.email = "Email აუცილებელია";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "გთხოვთ შეიყვანოთ სწორი Email";
    }
    if (!formValues.address) {
      errors.address = "მისამართი აუცილებელია";
    }
    if (!formValues.cardFullname) {
      errors.cardFullname = "ბარათის დასახელება აუცილებელია";
    }
    if (!formValues.cardNumber) {
      errors.cardNumber = "ბარათის ნომერი აუცილებელია";
    } else if (!/^\d{16}$/.test(formValues.cardNumber)) {
      errors.cardNumber = "გთხოვთ შეიყვანოთ სწორი ბარათის ნომერი";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCloseCheckout = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="darkk-screen">
        <section className="checkout-section">
          <div className="change" onClick={handleCloseCheckout}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <form onSubmit={handleCheckout}>
            <h2>
              <span className="first-letter">ბ</span>არათის დამატება
            </h2>
            <div className="checkout-container">
              <div className="container user-info-container">
                <div className="input-container">
                  <div className="label-container">
                    <i className="fa-solid fa-user"></i>
                    <label htmlFor="fullname">სახელი | გვარი</label>
                  </div>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="შეიყვანეთ თქვენი სახელი და გვარი"
                  />
                  {errors.fullname && (
                    <div
                      className="input-error-message"
                    >
                      {errors.fullname}
                    </div>
                  )}
                </div>
                <div className="input-container">
                  <div className="label-container">
                    <i className="fa-solid fa-envelope"></i>
                    <label htmlFor="email">Email</label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@gmail.com"
                  />
                  {errors.email && (
                    <div
                      className="input-error-message"
                    >
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="input-container">
                  <div className="label-container">
                    <i className="fa-regular fa-address-card"></i>
                    <label htmlFor="address">მისამართი</label>
                  </div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="შეიყვანეთ თქვენი მისამართი"
                  />
                  {errors.address && (
                    <div
                      className="input-error-message"
                    >
                      {errors.address}
                    </div>
                  )}
                </div>
              </div>
              <div className="container payment-container">
                <div className="cards-container flex">
                  <i className="fa-brands fa-cc-visa"></i>
                  <i className="fa-brands fa-cc-paypal"></i>
                  <i className="fa-brands fa-cc-discover"></i>
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
                  {errors.cardFullname && (
                    <div
                      className="input-error-message"
                    >
                      {errors.cardFullname}
                    </div>
                  )}
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
                  {errors.cardNumber && (
                    <div
                      className="input-error-message"
                    >
                      {errors.cardNumber}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button>OK</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default CheckOut;
