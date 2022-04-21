import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const [title, setTitle] = useState(MENU_LIST[0].menu);
  const [inputValue, setInputValue] = useState("");
  const [searchList, setSearchList] = useState(MENU_LIST);
  const searchMenu = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", outSideClickHander);
    return () => {
      document.removeEventListener("mousedown", outSideClickHander);
    };
  }, [searchMenu]);

  useEffect(() => {
    const filterMenu = MENU_LIST.filter(
      (el, index) => index === 0 || el.menu.match(new RegExp(inputValue, "i"))
    );

    inputValue.length > 0
      ? setSearchList(filterMenu)
      : setSearchList(MENU_LIST);
  }, [inputValue]);

  const outSideClickHander = (event) => {
    if (searchMenu.current && !searchMenu.current.contains(event.target)) {
      setIsShow(false);
      setInputValue("");
    }
  };

  const searchMenuDisplay = () => {
    setIsShow(!isShow);
  };

  const listValueChecked = (menu) => {
    let clickedMenu = MENU_LIST.map((el) =>
      Object.values(el).includes(menu)
    ).indexOf(true);

    setTitle(MENU_LIST[clickedMenu].menu);
  };

  const listClickHander = (menu) => {
    listValueChecked(menu);
    searchMenuDisplay();
  };

  const inputValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div id="Dropdown">
      <h1 className="title">5. Dropdown</h1>
      <div className="container">
        <button className="defaultMenuWrap" onClick={searchMenuDisplay}>
          <span className="defaultMenu">{title}</span>
          <img
            className="arrowIcon"
            alt="arrow icon"
            src="/images/arrow_down.png"
          />
        </button>
        {isShow && (
          <div className="searchMenuWrap" ref={searchMenu}>
            <input
              className="searchBox"
              placeholder="Search Symbol"
              type="text"
              value={inputValue}
              onChange={(event) => inputValueHandler(event)}
              autoFocus
            />
            <img
              className="searchIcon"
              alt="search icon"
              src="/images/search_glass.png"
            />
            <ul className="searchList">
              {searchList.map((el) => (
                <li
                  className="searchItem"
                  key={el.id}
                  onClick={() => listClickHander(el.menu)}
                >
                  {el.menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

const MENU_LIST = [
  { id: 1, menu: "All Symbol" },
  { id: 2, menu: "BTCUSD.PERP" },
  { id: 3, menu: "ETHUSD.PERP" },
  { id: 4, menu: "BCHUSD.PERP" },
  { id: 5, menu: "LTCUSD.PERP" },
  { id: 6, menu: "XRPUSD.PERP" },
  { id: 7, menu: "1000SHIBUSD.PERP" },
];
