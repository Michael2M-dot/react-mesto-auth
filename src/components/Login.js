import React, { useState, useContext } from "react";
import {withRouter, Route, NavLink} from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from '../auth';
import cx from "classnames";
import Logo from "../images/mesto_logo.svg";


const Login = ({ isSubmitted }) => {
	const currentUser = useContext(CurrentUserContext);
	const { signInUserData, setSignInUserData } = useState({email:'', password:''});
	// console.log(signInUserData.email)

	const handleChange = (e) => {
		const { name, value } = e.target;

		setSignInUserData({
		[name]: [value]
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!signInUserData.email || !signInUserData.password) {
			return;
		}
		auth.authorize(signInUserData.email, signInUserData.password)
			.then((data) => {
				if(data.jwt){
					setSignInUserData({
						email:'',
						password: ''
					}, () => {
						currentUser.handleLogin();
						currentUser.history.push('/main')
					})
				}
			})
			.catch((err) => console.log(`Ошибка при проверке токена: ${err.status}`))
	}

	return (
		<>
			<Header mix={"page__header section"}
			        buttonText={"Регистрация"}
			        endPoint={"/sign-up"}
			/>

			<InitialPageWithForm
				name={"user-sign-in"}
				title={"Войти"}
				button={!isSubmitted ? "Войти" : "Выполняется вход"}
				onSubmit={handleSubmit}
			>
				<Input
					type="url"
					// value={signInUserData.email || ""}
					id="user-email"
					placeholder="Email"
					name="userNameInput"
					textColor={"form__login-input"}
					required={true}
					maxLength="30"
					// minLength="2"
					onChange={handleChange}
				/>
				<Input
					type="password"
					// value={signInUserData.password || ""}
					id="user-password"
					placeholder="Пароль"
					name="userPasswordInput"
					textColor={"form__login-input"}
					required={true}
					// maxLength="30"
					// minLength="2"
					onChange={handleChange}
				/>

			</InitialPageWithForm>
		</>
	)
}


export default withRouter(Login);