import "./Branches.css";
const Branches = () => {
  return (
    <>
      <section className="tree-section">
        <section class="tree">
          <div class="branch flex">
            <p>
              მიიღე კალციუმით მდიდარი საკვები:
              <br />
              უცხიმო ან ნაკლებად ცხიმიანი რძის პროდუქტები.
            </p>
            <div class="leaf"></div>
          </div>
          <div class="branch flex branch2">
            <div class="leaf right"></div>
            <p>
              საკვებ რაციონში ჩართე მწვანე და ნარინჯისფერი ხილი და ბოსტნეული.
            </p>
          </div>
          <div class="branch flex branch3">
            <p class="rame">
              დალიეთ სუფთა წყალი ყოველდღე.
              <br />
              დეჰიდრატაცია იწვევს კანის ელასტიურობის დაქვეითებას.
            </p>
            <div class="leaf"></div>
          </div>
          <div class="branch flex branch4">
            <div class="leaf right"></div>
            <p>
              დაიძინე ერთსა და იმავე დროს დარწმუნდით, რომ საკმარისად დიდხანს
              გძინავთ
            </p>
          </div>
          <div class="stem"></div>
        </section>
      </section>
    </>
  );
};

export default Branches;
