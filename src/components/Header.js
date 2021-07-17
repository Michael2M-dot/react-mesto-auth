import Logo from "../images/mesto_logo.svg";
import cx from "classnames";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Header = ({ mix, buttonText, userEmail, endPoint }) => {
  const history = useHistory();
  const { setIsLoggedIn } = useContext(CurrentUserContext);

  //функция выхода пользователя из системы
  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/sign-in");
  };

  return (
    <header className={cx(mix, "header")}>
      <a href="#" className="logo" target="_self">
        <img src={Logo} alt="Логотип MESTO" className="header__logo" />
      </a>
      <ul className="header__menu">
        <li className="header__item">{userEmail}</li>
        <li>
          <NavLink className="header__item" to={endPoint} onClick={signOut}>
            {buttonText}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
