import "./Filter.css";
const Filter = () => {
    return ( 
        <>
         <section class="filter-section ou">
            <h2>გვესტუმრეთ ფილიალში</h2>
            <div class="box-container flex shop-content">
                <div class="box">
                    <img src="./img/biodegradable 1.svg" alt="biodegradable" class="shop white-on-hover"/>
                    <p>ბიო საკვები</p>
                </div>
                <div class="box">
                    <img src="./img/detox 1.svg" alt="detox" class="shop white-on-hover"/>
                    <p>დეტოქსი</p>
                </div>
                <div class="box white-on-hover">
                    <img src="./img/keto 1.svg" alt="keto" class="shop white-on-hover"/>
                    <p>დიაბეტური კეტო დიეტა</p>
                </div>
                <div class="box white-on-hover">
                    <img src="./img/shop (1) 1.svg" alt="shop" class="shop white-on-hover"/>
                    <p>სახლის ჰიგიენა<br/>სარეცხი სითხეები</p>
                </div>
                <div class="box white-on-hover">
                    <img src="./img/salad 1.svg" alt="salad" class="shop white-on-hover"/>
                    <p>სუპერფუდი</p>
                </div>
                <div class="box white-on-hover">
                    <img src="./img/vitamin 1.svg" alt="vitamin" class="shop white-on-hover"/>
                    <p>ვიტამინები</p>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Filter;