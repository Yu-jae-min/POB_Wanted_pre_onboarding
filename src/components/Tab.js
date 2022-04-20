import React, { useState } from "react";
import "./Tab.scss";

const Tab = () => {
  const [btnActive, setBtnActive] = useState([true, false, false]);

  const vegetableNameHandler = (id) => {
    const activeCheck = btnActive.map((el, index) => {
      return index === id - 1;
    });

    setBtnActive(activeCheck);
  };

  return (
    <section id="Tab">
      <h1 className="title">2. Tab</h1>
      <div className="container">
        {VEGETABLE_LIST.map((elem, index) => (
          <button
            className={btnActive[index] ? "btnActive" : "btnUnActive"}
            key={elem.id}
            onClick={() => vegetableNameHandler(elem.id)}
          >
            {elem.name}
          </button>
        ))}
      </div>
      <div className="sliderLineWrap">
        <div
          className="sliderLine"
          style={{
            transform: `translateX(${btnActive.indexOf(true) * 100 + "%"})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Tab;

const VEGETABLE_LIST = [
  { id: 1, name: "감자" },
  { id: 2, name: "고구마" },
  { id: 3, name: "카레라이스" },
];
