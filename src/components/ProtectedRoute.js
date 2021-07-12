import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ProtectedRoute =({component:Component, ...props}) => {
	const currentUser = useContext(CurrentUserContext);
	return(
		<Route>
			{() => currentUser.loggedIn === true ? <Component {...props}/> :
				<Redirect to='/sign-in' /> }
		</Route>
	)
};

export default ProtectedRoute;