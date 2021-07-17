import Logo from "../images/mesto_logo.svg";
import cx from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ mix, buttonText, userEmail, endPoint, signOut }) => {
  return (
    <header className={cx(mix, "header")}>
      <a href="/" className="logo" target="_self">
        <img src={Logo} alt="Логотип MESTO" className="header__logo" />
      </a>
      <div className="header__menu">
        <p className="header__item">{userEmail}</p>
        <p className="header__item">
          <NavLink className="header__link" to={endPoint} onClick={signOut}>
            {buttonText}
          </NavLink>
        </p>
      </div>
    </header>
  );
};

export default Header;
