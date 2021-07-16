import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from "../auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Login = ({ isSubmitted }) => {
  const history = useHistory();
  const appContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({ email: "", password: "" });

  //обработчик события на инпутах
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //обработчик сабмита авторизации пользователя
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return;
    }

    auth
      .authorize(userData.password, userData.email)
      .then((data) => {
        if (data) {
          setUserData({
            email: "",
            password: "",
          });
          appContext.setIsLoggedIn(true);
          appContext.setIsSubmitted(true);
          history.push("/main");
          setTimeout(() => appContext.setIsSubmitted(false), 5000);
        }
      })
      .catch((err) =>
        console.log(`Ошибка авторизации пользователя: ${err.status}`)
      );
  };

  return (
    <>
      <Header
        mix={"page__header section"}
        buttonText={"Регистрация"}
        endPoint={"/sign-up"}
      />

      <InitialPageWithForm
        name={"user-sign-in"}
        title={"Войти"}
        button={!appContext.isSubmitted ? "Войти" : "Выполняется вход"}
        onSubmit={handleSubmit}
        isSubmitted={appContext.isSubmitted}
      >
        <Input
          type="email"
          value={userData.email}
          id="email"
          placeholder="Email"
          name="email"
          colormodifier={"form__login-input"}
          required={true}
          maxLength="30"
          // minLength="2"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={userData.password}
          id="password"
          placeholder="Пароль"
          name="password"
          colormodifier={"form__login-input"}
          required={true}
          // maxLength="30"
          // minLength="2"
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Login;
