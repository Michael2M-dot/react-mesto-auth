import Logo from "../images/mesto_logo.svg";
import cx from "classnames";
import React from "react";

function Header({ mix }, props) {
  return (
      <>
          <header className={cx(mix, "header")}>
              <a href="/" className="logo" target="_self">
                  <img src={Logo} alt="Логотип MESTO" className="header__logo" />
              </a>
              <ul className="header__menu">
                  {props.userEmail && <li className="header__item">{props.userEmail}</li>}
                  <li className="header__item">{props.buttonText}</li>
              </ul>

          </header>
      </>

  );
}

export default Header;
