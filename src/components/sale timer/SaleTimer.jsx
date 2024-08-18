import "./SaleTimer.css";
import { useState, useEffect } from "react";
const SaleTimer = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 21,
    minutes: 34,
    seconds: 1,
  });
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
        newTime.seconds -= 1;
        if (newTime.seconds < 0) {
          newTime.seconds = 59;
          newTime.minutes -= 1;
        }
        if (newTime.minutes < 0) {
          newTime.minutes = 59;
          newTime.hours -= 1;
        }
        if (newTime.hours < 0) {
          newTime.hours = 23;
          newTime.days -= 1;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = () => {
    const { days, hours, minutes, seconds } = time;
    return `${days.toString().padStart(2, "0")} : ${hours
      .toString()
      .padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <>
      <section className="sale-timer-section">
        <div className="sale-container">
          <div className="circle"></div>
          <p>აქციის დასრულებამდე დარჩდენილია</p>
          <p id="demo">{formatTime()}</p>
        </div>
      </section>
    </>
  );
};

export default SaleTimer;
