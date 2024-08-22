import "./Panel.css";

const Panel = ({ show, message }) => {
  if (!show) return null;

  return (
    <>
      <section className="panel-section">
        <div className="panel-content">
          <p>{message}</p>
        </div>
      </section>
    </>
  );
};

export default Panel;
