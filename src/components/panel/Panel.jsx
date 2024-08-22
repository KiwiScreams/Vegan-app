import "./Panel.css";

const Panel = ({ show, message }) => {
  return (
    <>
      {show && (
        <section className="panel-section">
          <div className="panel-content">
            <p>{message} <i className="fa-solid fa-cart-plus"></i></p>
          </div>
        </section>
      )}
    </>
  );
};

export default Panel;
