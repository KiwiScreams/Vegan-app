import "./SaleTimer.css";
const SaleTimer = () => {
  return (
    <>
      <section className="sale-timer-section">
        <div class="sale-container">
          <div class="circle"></div>
          <p>აქციის დასრულებამდე დარჩდენილია</p>
          <p id="demo">03 : 21 : 34 : 01</p>
        </div>
      </section>
    </>
  );
};

export default SaleTimer;
