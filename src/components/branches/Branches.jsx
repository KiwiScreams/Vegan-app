import "./Branches.css";
const Branches = () => {
  return (
    <>
      <section className="tree-section">
        <section className="tree">
          <div className="branch flex">
            <p>
              მიიღე კალციუმით მდიდარი საკვები:
              <br />
              უცხიმო ან ნაკლებად ცხიმიანი რძის პროდუქტები.
            </p>
            <div className="leaf"></div>
          </div>
          <div className="branch flex branch2">
            <div className="leaf right"></div>
            <p>
              საკვებ რაციონში ჩართე მწვანე და ნარინჯისფერი ხილი და ბოსტნეული.
            </p>
          </div>
          <div className="branch flex branch3">
            <p className="rame">
              დალიეთ სუფთა წყალი ყოველდღე.
              <br />
              დეჰიდრატაცია იწვევს კანის ელასტიურობის დაქვეითებას.
            </p>
            <div className="leaf"></div>
          </div>
          <div className="branch flex branch4">
            <div className="leaf right"></div>
            <p>
              დაიძინე ერთსა და იმავე დროს დარწმუნდით, რომ საკმარისად დიდხანს
              გძინავთ
            </p>
          </div>
          <div className="stem"></div>
        </section>
      </section>
    </>
  );
};

export default Branches;
