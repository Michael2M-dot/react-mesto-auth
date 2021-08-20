// Токен: 99295e52-decf-4a30-8030-f17c65fb60b0
// Идентификатор группы: cohort-24
/* "homepage": "https://github.com/Michael2M-dot/react-mesto-auth" */
//  "homepage": "home/darak-admin/frontend-mesto",

class Api {
  constructor({ serverUrl, headers }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`${res.status} ${res.statusText}`);
  }

  getUserData() {
    return fetch(`${this._serverUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkStatus(res));
  }

  getInitialCards() {
    return fetch(`${this._serverUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkStatus(res));
  }

  updateUserData(data) {
    return fetch(`${this._serverUrl}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._checkStatus(res));
  }

  addCard(card) {
    return fetch(`${this._serverUrl}/cards`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then((res) => this._checkStatus(res));
  }

  deleteCard(id) {
    return fetch(`${this._serverUrl}/cards/${id}`, {
      method: "DELETE",
      credentials: 'include',
      headers: this._headers,
    }).then((res) => this._checkStatus(res));
  }

  changeLikeCardStatus(id, cardIsLiked) {
    return fetch(`${this._serverUrl}/cards/likes/${id}`, {
      method: cardIsLiked ? "PUT" : "DELETE",
      credentials: 'include',
      headers: this._headers,
    }).then((res) => this._checkStatus(res));
  }

  updateAvatar(data) {
    return fetch(`${this._serverUrl}/users/me/avatar`, {
      method: "PATCH",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => this._checkStatus(res));
  }
}

const api = new Api({
  serverUrl: "http://api.mmm.mesto.nomoredomai.nomoredomains.club",
  headers: {
    authorization: "99295e52-decf-4a30-8030-f17c65fb60b0",
    "Content-Type": "application/json",
  },
});

export default api;
