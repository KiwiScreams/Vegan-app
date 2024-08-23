import { useEffect, useState } from "react";
import "./Loader.css";
const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      setText("lol");
    }, 3000);
  }, []);
  return (
    <>
      <div>
        {
        show ? 
        <section className="loader">
            <h1>Vegan World</h1>
        </section> : null
        }
        </div>
    </>
  );
};

export default Loader;
