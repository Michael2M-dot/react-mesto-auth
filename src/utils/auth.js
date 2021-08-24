// export const BASE_URL = "https://auth.nomoreparties.co";
// export const BASE_URL = "http://api.mmm.mesto.nomoredomai.nomoredomains.club";

//регистрация пользователя на сервере
export const register = (password, email) => {
  return (
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      // .then((res) => checkStatus(res))
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 400) {
            return res.json().then((json) => {
              throw new Error(json.error);
            });
          }
        }
      })
      .then((response) => {
        return response;
      })
  );
};

//авторизация пользователя на сервере + получение токена
export const authorize = (password, identifier) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: identifier,
    }),
  })
    .then((res) => checkStatus(res))
    .then((res) => {
      const { jwt } = res.headers;
      console.log(jwt)
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

//проверка валидности токена на стороне сервера
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // 'Set-Cookie': `${token}`,
    },
  })
    .then((res) => {
      const { jwt } = res.headers.cookies;
      console.log(jwt)
      if (res.ok) {
        return res.json();
      } else {
        localStorage.removeItem("jwt");
      }
    })
    .then((data) => data);
};

//функция проверки ошибок response
const checkStatus = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
};
