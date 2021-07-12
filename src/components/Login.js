import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";


const Login = ({ isSubmitted }) => {
	const currentUser = useContext(CurrentUserContext);
	const { currentUserData, setCurrentUserData } = useState(currentUser)
	const { signInUserData, setSignInUserData } = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setSignInUserData({
		[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!signInUserData.username || !signInUserData.password) {
			return;
		}
	}

	return(
		<>
			<Header mix={"page__header section"}
			        buttonText="Регистрация"
			/>
			<InitialPageWithForm
				name={"user-login"}
				title={"Войти"}
				button={!isSubmitted ? "Войти" : "Выполняется вход"}
				onSubmit={handleSubmit}

			>
				<Input
					type="url"
					value={userEmail || ""}
					id="user-email"
					placeholder="Email"
					name="userNameInput"
					required={true}
					maxLength="30"
					// minLength="2"
					onChange={handleChange}
				/>
				<Input
					type="password"
					value={password || ""}
					id="user-password"
					placeholder="Пароль"
					name="userPasswordInput"
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