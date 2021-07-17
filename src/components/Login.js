import React, { useState } from "react";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";

const Login = ({ handleLogin, isSubmitted }) => {
  //стэйт переменная хранения полей ввода
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

    handleLogin (userData.password, userData.email);
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
          // maxLength="30"
          // minLength="5"
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
          // minLength="6"
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Login;
