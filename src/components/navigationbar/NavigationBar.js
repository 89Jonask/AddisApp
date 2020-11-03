import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";
import { Button } from "./Button";
import RoutingPath from "../../routes/RoutingPath";

export const NavigationBar = () => {
  const [click, setClick] = useState(false);

  const [dropdown, setDropDown] = useState(false);
  const [dropdown1, setDropDown1] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropDown(true);
  };

  const onMouseLeave = () => {
    setDropDown(false);
  };

  const onMouseEnter1 = () => {
    setDropDown1(true);
  };

  const onMouseLeave1 = () => {
    setDropDown1(false);
  };

  return (
    <div className="navigationBar">
      <div class="hamburger-icon" onClick={handleClick}>
        <span class="burger-1"></span>
        <span class="burger-2"></span>
        <span class="burger-3"></span>
      </div>
      <ul className={click ? "main-menu active" : "main-menu"}>
        <li className="menu-item">
          <Link
            to={RoutingPath.homeView}
            className="menu-link"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to={RoutingPath.aboutView}
            className="menu-link"
            onClick={closeMobileMenu}
          >
            Shop
          </Link>
        </li>
        <li
          className="sub-menu"
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
          onClick={handleClick}
        >
          <Link to={RoutingPath.portfolioView} className="menu-link">
            Portfolio
          </Link>
          {dropdown1 && <DropDown />}
        </li>
        <li
          className="sub-menu"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={handleClick}
        >
          <Link to={RoutingPath.aboutView} className="menu-link">
            Info
          </Link>
          {dropdown && <DropDown />}
        </li>
        <Button />
      </ul>
    </div>
  );
};
export default NavigationBar;
