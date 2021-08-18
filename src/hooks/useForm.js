import React, { useState, useCallback     } from "react";

export function useForm () {
	const [values, setValues] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues( {
			...values,
			[name]: value,
		});
	};

	return { values, handleChange, setValues };
}

export function useFormWithValidation() {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(false);

	const handleChange = (e) => {
		const input = e.target;
		const { name, value } = input;

		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: input.validationMessage});
		setIsValid(input.closest("form").checkValidity());
	}

	const resetForm = useCallback(
		(newValue = {}, newError = {}, newIsValid = false) => {
			setValues(newValue);
			setErrors(newError);
			setIsValid(newIsValid);
		}
	);
	 return ({ handleChange, resetForm, values, errors, isValid })
}