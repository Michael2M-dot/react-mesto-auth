import React from "react";
import { Link } from "react-router-dom";

const InitialPageWithForm = ({
name,
title,
onSubmit,
children,
button,
idSubmitted,
userSignUp
}) => {
	return(
		<section className="page__login section">
			<div className="popup popup__window_size_xs">
				<h2 className="popup__title popup__title_pos_centered">{title}</h2>
				<form
					className="form"
					id={`${name}`}
					name={`${name}`}
					autoComplete="off"
					onSubmit={onSubmit}
				>
					{children}
					<button
						arial-lable="Подтвердите действие пользователя"
						type="submit"
						className={`button form__submit-btn form__login-submit-btn ${
							idSubmitted ? "form__submit-btn_disabled" : ""
						}`}
						disabled={idSubmitted}
					>
						<div className="button__wrapper">
							<div className="button__text">{button}</div>
							<div
								className={`button__jumping-dots ${
									idSubmitted ? "" : "button__jumping-dots_visibility_hidden"
								}`}
							>
								<span className="button__jumping-dots jump">.</span>
								<span className="button__jumping-dots jump">.</span>
								<span className="button__jumping-dots jump">.</span>
							</div>
						</div>
					</button>

					{userSignUp &&
						<div className="popup__footer">
							<p className="popup__subtitle">Уже зарегистрированы?</p>
							<Link className="popup__subtitle" to="/signIn">{userSignUp}</Link>
						</div>}
				</form>
			</div>
		</section>
	)
}

export default InitialPageWithForm;