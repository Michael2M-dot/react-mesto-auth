export const BASE_URL = 'https://auth.nomoreparties.co/';

export const register = (email, password) => {
	return fetch (`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
		},
		body: JSON.stringify({password, email})
	})
		.then((res) => {
			try {
				if(res.status === 200) {
					return res.json();
				}
			} catch (err) {
				return err;
			}
		})
		.then((res) => {
			return res;
		})
		.catch((err) => console.log(`Ошибка регистрации пользователя: ${err.status}`))
}



export const authorize = (identifier, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({password, identifier})
	})
		.then((response) => response.json())
		.then((data) => {
			if(data.jwt){
				localStorage.setItem('jwt', data.jwt);
				return data;
			}
		})
		.catch((err) => console.log (`Ошибка при авторизации пользователя: ${err.status}`))
}

