import React, { useEffect, useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const [value, setValue] = useState(1);
  const [dotActive, setDotActive] = useState("");

  const percentValueHandler = (event) => {
    setValue(event.target.value);
  };

  const percentBranchMoving = (percent) => {
    setValue(percent);
  };

  useEffect(() => {
    const percentChecking = RANGE_BRANCH.map((el) => el.percent <= value);
    setDotActive(percentChecking);
  }, [value]);

  return (
    <div id="Slider">
      <h1 className="title">3. Slider</h1>
      <div className="container">
        <div className="percentWrap">
          <span className="percent">{value}</span>
          <span className="sign">%</span>
        </div>
        <div className="rangeWrap">
          <div className="inputWrap">
            <input
              className="rangeBar"
              type="range"
              name="rangeInput"
              min="1"
              max="100"
              value={value}
              onChange={(event) => percentValueHandler(event)}
            />
            <div className="progressBarUpper">
              <div className="progressBarLow" style={{ right: `-${value}%` }} />
            </div>
          </div>
          <ul className="dotBranchs">
            {RANGE_BRANCH.map((el) => (
              <li
                className="dotBranch"
                key={el.id}
                style={{
                  background: dotActive[el.id - 1] ? "#49b0ae" : "#ddd",
                }}
              />
            ))}
          </ul>
        </div>
        <ul className="percentLabels">
          {RANGE_BRANCH.map((el) => (
            <li
              className="percentLabel"
              key={el.id}
              onClick={() => percentBranchMoving(el.percent)}
            >
              {el.percent}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;

const RANGE_BRANCH = [
  { id: 1, percent: 1 },
  { id: 2, percent: 25 },
  { id: 3, percent: 50 },
  { id: 4, percent: 75 },
  { id: 5, percent: 100 },
];
