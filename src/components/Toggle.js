import React, { useState } from "react";
import "./Toggle.scss";

const Toggle = () => {
  const [btnActive, setbtnActive] = useState(true);

  const btnHandler = (event) => {
    setbtnActive(event.target.innerHTML === "기본");
  };

  return (
    <section id="Toggle">
      <h1 className="title">1. Toggle</h1>
      <div className="container">
        <div className={btnActive ? "btnBgDefault" : "btnBgDetail"}></div>
        <button
          className={btnActive ? "actionBtnDetail" : "actionBtnDefault"}
          onClick={btnHandler}
        >
          기본
        </button>
        <button
          className={btnActive ? "actionBtnDefault" : "actionBtnDetail"}
          onClick={btnHandler}
        >
          상세
        </button>
      </div>
    </section>
  );
};

export default Toggle;
