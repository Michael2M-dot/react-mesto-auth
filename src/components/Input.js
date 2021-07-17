import React, {useContext, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const Input = (props) => {

    const [inputType, setInputType] = useState(props.type)

    const { setIsShowPassword, isShowPassword } = useContext(CurrentUserContext);

    console.log(inputType)
    const handlePasswordVisible = () => {
        if(inputType === 'password') {
            setIsShowPassword(true)
            setInputType( 'text')
        } else {
            setIsShowPassword(false)
            setInputType( 'password')
        }
    }

  return (
    <label className="form__fieldset" htmlFor={`${props.id}-input`}>
      <input
        {...props}
        type={inputType}
        className={`form__input ${props.colormodifier}`}
        id={`${props.id}-input`}
      />
        {props.type === 'password' &&
            <a href="#"
               onClick={handlePasswordVisible}
               className={`form__password-control ${isShowPassword ? "form__password-control_visible" : ""}`} />}

      <span className="form__input-error" id={`${props.id}-input-error`} />
    </label>
  );
};

export default Input;
