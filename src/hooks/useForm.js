import React, { useCallback, useState } from "react";

// хук для сбора информации с полей ввода с последующей валидацией
export function useFormInputsValidate() {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState({});

	const handleChange = (e) => {
		const input = e.target;
		const name = input.name;
		const value = input.value;

		setValues({ ...values, [name]: value });
		setErrors({ ...errors, [name]: input.validationMessage});
		setIsValid(input.closest('form').checkValidity());
	}

	const restForm = useCallback(
		(newValues = {}, newErrors = {}, newIsValid = false ) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return { values, errors, isValid, handleChange, restForm };
}


// // хук для сбора информации с полей ввода
// export function useForm () {
// 	const [ values, setValues ] = useState({});
//
// 	const handleChange = (e) => {
// 		const input = e.target;
// 		const value = input.value;
// 		const name = input.name;
// 		setValues({ ...values, [name]: value })
// 	}
//
// 	return { values, handleChange, setValues };
// }
