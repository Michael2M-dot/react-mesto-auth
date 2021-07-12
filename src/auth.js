export const BASE_URL = 'https://auth.nomoreparties.co/';

export const authorize = (identifier, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({password, identifier})
	})
		.then((response) => response.json())
		.then((data) => {
			if(data.jwt){
				localStorage.setItem('jwt', data.jwt);
				return data
			}
		})
		.catch((err) => console.log (`Ошибка при авторизации пользователя: ${err.status}`))
}

