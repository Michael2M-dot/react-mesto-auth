import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from "../auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Register = () => {
  const { isSubmitted, setIsSubmitted } = useContext(CurrentUserContext);
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
    setIsSubmitted(true);

    auth.register(userData.password, userData.email).then((res) => {
      if (res) {
        setUserData({
          ...userData,
          message: "Регистрация прошла успешно, Вы зарегистрированы!",
        });

        history.push("/sign-in");
        setTimeout(() => setIsSubmitted(false), 5000);
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
        endPoint={"/sign-in"}
      />
      <InitialPageWithForm
        name={"user-sign-up"}
        title={"Регистрация"}
        button={!isSubmitted ? "Зарегистрироваться" : "Идет регистрация"}
        onSubmit={handleSubmit}
        userSignUp={"Войти"}
        isSubmitted={isSubmitted}
      >
        <Input
          type="email"
          value={userData.email}
          id="email"
          name="email"
          placeholder="Email"
          colormodifier={"form__login-input"}
          required={true}
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
