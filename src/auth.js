export const BASE_URL = "https://auth.nomoreparties.co";

//регистрация пользователя на сервере
export const register = (password, email) => {
  console.log(password);
  console.log(email);
  return fetch(`${BASE_URL}/signup`, {
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
    .then((res) => {
      try {
        if (res.status === 201) {
          return res.json();
        }
      } catch (err) {
        return err.log;
      }
      console.log(res);
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(`Ошибка регистрации пользователя: ${err}`);
      alert(err.message);
    });
};

//авторизация пользователя на сервере + получение токена
export const authorize = (password, identifier) => {
  return (
    fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: identifier,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return data;
        }
      })
      // .then((data) => data)
      .catch((err) =>
        console.log(`Ошибка при авторизации пользователя: ${err}`)
      )
  );
};

//проверка валидности токена на стороне сервера
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        localStorage.removeItem("jwt");
      }
    })
    .then((data) => data)
    .catch((err) => console.log(`Ошибка при проверке токена:${err}`));
};
