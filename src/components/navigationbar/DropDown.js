import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./DropDown.css";

export const DropDown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((items, index) => {
          return (
            <ul>
              <li key={index}>
                <Link
                  className={items.cName}
                  to={items.url}
                  onClick={() => setClick(false)}
                >
                  {items.title}
                </Link>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};
