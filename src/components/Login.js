import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";


const Login = () => {
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
			<Header mix={"page__header section"} />
		</>
	)
}


export default withRouter(Login);