import "./Panel.css";
import { useState, useEffect } from "react";

const Panel = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <>
      <div className="panel">
        <div className="panel-header">
          <h1>Cart</h1>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="panel-content">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Panel;
