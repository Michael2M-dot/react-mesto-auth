import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from "../auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Register = () => {
  const appContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.password || !userData.email) {
      return;
    }
    auth.register(userData.password, userData.email).then((res) => {
      if (res) {
        setUserData({
          ...userData,
          message: "Регистрация прошла успешно, Вы зарегистрированы!",
        });
        appContext.setIsSubmitted(true);
        history.push('/sign-in');
      } else {
        setUserData({
          ...userData,
          message: "Что-то пошло не так с регистрацией пользователя",
        });
      }
    });
  };

  return (
    <>
      <Header
        mix={"page__header section"}
        buttonText={"Войти"}
        endPoint={'/sign-in'}
      />
      <InitialPageWithForm
        name={"user-sign-up"}
        title={"Регистрация"}
        button={
          !appContext.isSubmitted
            ? "Зарегистрироваться"
            : "Регистрация нового пользователя"
        }
        onSubmit={handleSubmit}
        userSignUp={"Войти"}
      >
        <Input
          type="email"
          value={userData.email}
          id="email"
          name="email"
          placeholder="Email"
          colormodifier={"form__login-input"}
          required={true}
          // maxLength="30"
          minLength="2"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={userData.password}
          id="password"
          name="password"
          placeholder="Пароль"
          colormodifier={"form__login-input"}
          required={true}
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Register;
