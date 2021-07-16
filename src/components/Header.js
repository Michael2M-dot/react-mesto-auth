import Logo from "../images/mesto_logo.svg";
import cx from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

function Header({ mix, buttonText, userEmail, endPoint }) {
  return (
    <header className={cx(mix, "header")}>
      <a href="/" className="logo" target="_self">
        <img src={Logo} alt="Логотип MESTO" className="header__logo" />
      </a>
      <ul className="header__menu">
        <li className="header__item">{userEmail}</li>
        <NavLink className="header__item" to={endPoint}>
          {buttonText}
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
