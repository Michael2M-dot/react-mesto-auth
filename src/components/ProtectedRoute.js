import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ component: Component, to, ...props }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  console.log(props.isLoggedIn);
  return (
    <Route>
      {isLoggedIn ? <Component {...props} /> : <Redirect to={to} />}
    </Route>
  );
};

export default ProtectedRoute;
