import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from "../auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Login = () => {
  const history = useHistory();
  const {
    setIsSubmitted,
    isSubmitted,
    setIsLoggedIn,
    authUser,
    setAuthUser,
    setIsInfoToolTipOpen,
    setIsShowPassword,
  } = useContext(CurrentUserContext);
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

    setIsSubmitted(true);

    auth
      .authorize(userData.password, userData.email)
      .then((data) => {
        if (data) {
          setUserData({
            email: "",
            password: "",
          });
          setIsLoggedIn(true);
          setIsShowPassword(false);
          history.push("/main");
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          setUserData({
            email: "",
            password: "",
          });
          setIsLoggedIn(false);
          setIsSubmitted(false);
          setIsInfoToolTipOpen(true);
          setIsShowPassword(false);
          setAuthUser({
            ...authUser,
            message: "Неверный логин или пароль! Попробуйте еще раз.",
          });
        }
      })
      .catch((err) => {
        console.log(`Ошибка авторизации пользователя: ${err.status}`);
        setIsSubmitted(false);
        setIsShowPassword(false);
      });
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
        button={!isSubmitted ? "Войти" : "Выполняется вход"}
        onSubmit={handleSubmit}
        isSubmitted={isSubmitted}
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
          minLength="5"
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
          minLength="6"
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Login;
