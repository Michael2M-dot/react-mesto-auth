import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from "../auth";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Register = () => {
  const {
    isSubmitted,
    setIsSubmitted,
    setIsInfoToolTipOpen,
    setIsSignUp,
    setAuthUser,
    authUser,
    setIsShowPassword
  } = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
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

    if (userData.password === userData.confirmPassword) {
      setIsSubmitted(true);

      auth.register(userData.password, userData.email).then((res) => {
        if (res) {
          setAuthUser({
            ...authUser,
            message: "Вы успешно зарегистрировались!",
          });
          setIsInfoToolTipOpen(true);
          setIsSignUp(true);
          setIsShowPassword(false);
          history.push("/sign-in");
          setTimeout(() => setIsSubmitted(false), 2000);
        } else {
          setAuthUser({
            ...authUser,
            message: "Что-то пошло не так! Попробуйте еще раз.",
          });
          setIsSignUp(false);
          setIsShowPassword(false);
        }
      });
    } else {
        setUserData({
          ...userData,
          password:"",
          confirmPassword: ""
        })
        setAuthUser({
          ...authUser,
          message: "Пароли не совпадают! Попробуйте еще раз",
        });
        setIsSignUp(false);
        setIsShowPassword(false);
        setIsInfoToolTipOpen(true);
    }
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
        <Input
          type="password"
          value={userData.confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Подтвердите пароль"
          colormodifier={"form__login-input"}
          required={true}
          onChange={handleChange}
        />
      </InitialPageWithForm>
    </>
  );
};

export default Register;
