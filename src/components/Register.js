import React, {useState} from "react";
import { Link, withRouter } from 'react-router-dom'
import Header from "./Header";
import InitialPageWithForm from "./InitialPageWithForm";
import Input from "./Input";
import * as auth from '../auth';

const Register = ({ isSubmitted }) => {
	const { signUpUserData, setSignUpUserData } = useState();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setSignUpUserData({
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!signUpUserData.email || !signUpUserData.password) {
			return;
		}
		auth.register(signUpUserData.email, signUpUserData.password)
			.then((res) => {
				if(res){
					setSignUpUserData({}, () => {

					});
				}
			})

	}

	return(
		<>
			<Header mix={"page__header section"}
			        buttonText={"Войти"}
			        endPoint={"/sign-in"}
			/>
			<InitialPageWithForm
				name={"user-sign-up"}
				title={"Регистрация"}
				button={!isSubmitted ? "Зарегистрироваться" : "Регистрация нового пользователя"}
				onSubmit={handleSubmit}
				userSignUp={"Войти"}
			>
				<Input
					type="url"
					value={signUpUserData || ""}
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
					value={signUpUserData || ""}
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

};

export default withRouter(Register);