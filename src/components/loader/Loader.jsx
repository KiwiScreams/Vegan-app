import { useEffect, useState } from "react";
import "./Loader.css";
const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [show]);

  return (
    <>
      <div>
        {show ? (
          <section className="loader">
            <h1>Vegan World</h1>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default Loader;
