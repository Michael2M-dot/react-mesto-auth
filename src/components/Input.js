import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Input = (props) => {
  const { setIsShowPassword, isShowPassword } = useContext(CurrentUserContext);
  //стэйт переменная для типа поля ввода инпута
  const [inputType, setInputType] = useState(props.type);

  //функционал отображения пароля в поле ввода
  const handlePasswordVisible = () => {
    if (inputType === "password") {
      setIsShowPassword(true);
      setInputType("text");
    } else {
      setIsShowPassword(false);
      setInputType("password");
    }
  };

  return (
    <label className="form__fieldset" htmlFor={`${props.id}-input`}>
      <input
        {...props}
        type={inputType}
        className={`form__input ${props.colormodifier}`}
        id={`${props.id}-input`}
      />
      {props.type === "password" && (
        <span
          onClick={handlePasswordVisible}
          className={`form__password-control ${
            isShowPassword ? "form__password-control_visible" : ""
          }`}
        />
      )}

      <span className="form__input-error" id={`${props.id}-input-error`}>
          {props.errors}
      </span>
    </label>
  );
};

export default Input;
