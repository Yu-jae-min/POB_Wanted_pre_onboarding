import React from "react";
import { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [btnHandler, setbtnHandler] = useState(true);

  const btnDisplayHandler = (event) => {
    setbtnHandler(event.target.innerHTML === "기본");
  };

  return (
    <section id="Toggle">
      <h1 className="title">1. Toggle</h1>
      <div className="container">
        <div className={btnHandler ? "btnBgDefault" : "btnBgDetail"}></div>
        <button
          className={btnHandler ? "actionBtnDetail" : "actionBtnDefault"}
          onClick={btnDisplayHandler}
        >
          기본
        </button>
        <button
          className={btnHandler ? "actionBtnDefault" : "actionBtnDetail"}
          onClick={btnDisplayHandler}
        >
          상세
        </button>
      </div>
    </section>
  );
};

export default Toggle;
