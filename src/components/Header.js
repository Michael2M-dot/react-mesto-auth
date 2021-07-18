import Logo from "../images/mesto_logo.svg";
import cx from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ mix, buttonText, userEmail, endPoint, signOut }) => {
  return (
    <header className={cx(mix, "header")}>
      <NavLink to="" className="logo">
        <img src={Logo} alt="Логотип MESTO" className="header__logo" />
      </NavLink>
      <div className="header__menu">
        {userEmail && <p className="header__item">{userEmail}</p>}
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
