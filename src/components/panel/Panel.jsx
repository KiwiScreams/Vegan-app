import "./Panel.css";

const Panel = ({ show, message }) => {
  return (
    <>
      {show && (
        <section className="panel-section">
          <div className="panel-content">
            <p>{message}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Panel;
