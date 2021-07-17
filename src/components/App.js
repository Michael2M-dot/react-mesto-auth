import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import PopupWithSubmit from "./PopupWithSubmit";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoToolTip from "./InfoToolTip";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import * as auth from "../auth";

const App = () => {
  //Стэйт переменная для открытия попапа редактирования профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  //Стэйт переменная для открытия попапа добавления новой карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  //Стэйт переменная для открытия попапа редактирования аватара пользователя
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  //Стэйт переменная для открытия попапа полноразмерного простмотра изображения
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  //Стэйт переменная для открытия попапа подтверждения действия пользователя
  const [isPopupWithSubmitOpen, setIsPopupWithSubmitOpen] = useState(false);
  //Стэйт переменная открытия попапа результатов регистрации пользователя
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  //Стэйт переменная сабмита формы
  const [isSubmitted, setIsSubmitted] = useState(false);
  //Стэйт переменная авторизации пользователя
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Стэйт переменная регистрации нового пользователя
  const [isSignedUp, setIsSignUp] = useState(false);
  //Стэйт переменная для временного хранения данных о выбраной карточке
  const [selectedCard, setSelectedCard] = useState({});
  //Стэйт переменная для карточки
  const [cards, setCards] = useState([]);
  //Стэйт переменная для хранения данных удаляемой карточки
  const [deletedCardData, setDeletedCardData] = useState({});
  //Стэйт переменная для хранения данных пользователя
  const [currentUser, setCurrentUser] = useState({});
  //Стэйт переменная для cохранения данных авторизованного пользователя
  // const [authUser, setAuthUser] = useState({});
  const [authUserData, setAuthUserData] = useState({});
  const [isShowPassword, setIsShowPassword] = useState(false);
  const history = useHistory();

  //получаем массив исходных карточек
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузке карточек: ${err.status} ${err.statusText}`
        );
      });
  }, []);

  // функционал загрузки данных о пользователе с сервера
  useEffect(() => {
    api
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузке данных пользователя: ${err.status} ${err.statusText}`
        );
      });
  }, []);

  //функционал добавления новой карточки пользователя
  const handleAddCardSubmit = (newCard) => {
    setIsSubmitted(true);

    api
      .addCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        setIsAddPlacePopupOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузки карточки пользователя: ${err.status} ${err.statusText}`
        );
      });
  };

  //функция управления лайками на карточке
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((items) =>
          items.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((err) => {
        console.log(
          `Ошибка при установке лайка: ${err.status} ${err.statusText}`
        );
      });
  };

  //функция удаления карточки пользователя
  const handleCardDelete = (card) => {
    setIsSubmitted(true);

    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== card._id));
        setIsPopupWithSubmitOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Ошибка при удалении карточки: ${err.status} ${err.statusText}`
        );
      });
  };

  //функционал обновления аватара пользователя
  const handleAvatarUpdate = (data) => {
    setIsSubmitted(true);

    api
      .updateAvatar(data)
      .then((data) => {
        setCurrentUser(Object.assign(currentUser, { avatar: data.avatar }));
        setIsEditAvatarPopupOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при загрузки изображения аватара: ${err.status} ${err.statusText}`
        );
      });
  };

  //функция обновления информации о пользователе
  const handleUserUpdate = (data) => {
    setIsSubmitted(true);

    api
      .updateUserData(data)
      .then((data) => {
        setCurrentUser(data);
        setIsEditProfilePopupOpen(false);
        setTimeout(() => setIsSubmitted(false), 1000);
      })
      .catch((err) => {
        console.log(
          `Непредвиденная ошибка при передаче на сервер данных пользователя: ${err.status} ${err.statusText}`
        );
      });
  };

  //функция управления открытием и закрытием попапов
  //открываем попап для добавления карточки пользователя
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  //открываем попап редактирования данных о пользователе
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  //открываем попапа редактирования аватара пользователя
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  //открываем попап подтверждения действия пользователя
  const handlePopupWithForm = (data) => {
    setIsPopupWithSubmitOpen(true);
    setDeletedCardData(data);
  };

  //открываем попап полноразмерного изображения карточки
  const handleCardClick = (value) => {
    setIsImagePopupOpen(true);
    setSelectedCard(value);
  };

  //функция закрытия всех попапов по нажатию на крестик или клику на оверлей
  const closeAllPopups = (evt) => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsPopupWithSubmitOpen(false);
    setIsInfoToolTipOpen(false);
  };

  //установка слушателя для закрытия попапа по ESC
  useEffect(() => {
    if (
      isEditProfilePopupOpen ||
      isAddPlacePopupOpen ||
      isEditAvatarPopupOpen ||
      isImagePopupOpen ||
      isPopupWithSubmitOpen ||
      isInfoToolTipOpen
    ) {
      document.addEventListener("keydown", handleEscClose);
    }

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [
    isEditProfilePopupOpen,
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isImagePopupOpen,
    isPopupWithSubmitOpen,
    isInfoToolTipOpen,
  ]);

  //обработчик закрытия попапов по клику на оверлей или крестик
  const handleClickClosePopup = (e) => {
    if (
      e.target.classList.contains("page__popup") ||
      e.target.classList.contains("popup__button-close")
    ) {
      closeAllPopups();
    }
  };

  //обработчик закрытия попапов по нажатию ESC
  const handleEscClose = (e) => {
    if (e.keyCode === 27) {
      closeAllPopups();
    }
  };


  const handleLogin = (password, email) => {
    setIsSubmitted(true);

    auth
        .authorize(password, email)
        .then((data) => {
          if (data) {
            setAuthUserData({
              email: "",
              password: "",
            });
            setIsLoggedIn(true);
            setIsShowPassword(false);
            history.push("/main");
            setTimeout(() => setIsSubmitted(false), 3000);
          } else {
            setAuthUserData({
              ...authUserData,
              message: "Неверный логин или пароль! Попробуйте еще раз.",
            });
            setIsLoggedIn(false);
            setIsSubmitted(false);
            setIsInfoToolTipOpen(true);
            setIsShowPassword(false);
          }
        })
        .catch((err) => {
          console.log(`Ошибка авторизации пользователя: ${err.status}`);
          setIsSubmitted(false);
          setIsShowPassword(false);
        });
  }


  //функция проверки токена для автоматической авторизации пользователя
  useEffect(() => {
    handleTokenCheck();
  }, [history]);

  //функция проверки токена пользователя
  const handleTokenCheck = () => {
    const token = localStorage.getItem("jwt");

    if (token) {
      auth.checkToken(token).then((res) => {
        const { data } = res;
        setAuthUserData({
          ...authUserData,
          email: data.email
        });
        setIsLoggedIn(true);
        history.push("/main");
      });
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        setIsLoggedIn,
        isSubmitted,
        setIsSubmitted,
        // setAuthUser,
        // authUser,
        isSignedUp,
        setIsSignUp,
        isInfoToolTipOpen,
        setIsInfoToolTipOpen,
        isShowPassword,
        setIsShowPassword,
        authUserData
      }}
    >
      <div className="page">
        <div className="page__container">
          <Switch>
            <ProtectedRoute
              path="/main"
              component={Main}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onLikeClick={handleCardLike}
              onDeleteClick={handlePopupWithForm}
              to={"/sign-in"}
            />
            <Route path="/sign-in">
              <Login
                  handleLogin={handleLogin}
                  isSubmitted={isSubmitted}
              />
            </Route>
            <Route path="/sign-up">
              <Register />
            </Route>
            <Route path="/">
              {isLoggedIn ? (
                <Redirect to="/main" />
              ) : (
                <Redirect to="/sign-in" />
              )}
            </Route>
          </Switch>
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={handleClickClosePopup}
          onUpdateUser={handleUserUpdate}
          isSubmitted={isSubmitted}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={handleClickClosePopup}
          onUpdateAvatar={handleAvatarUpdate}
          isSubmitted={isSubmitted}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={handleClickClosePopup}
          onAddPlace={handleAddCardSubmit}
          isSubmitted={isSubmitted}
        />

        <ImagePopup
          isOpen={isImagePopupOpen}
          data={selectedCard}
          onClose={handleClickClosePopup}
        />

        <PopupWithSubmit
          isOpen={isPopupWithSubmitOpen}
          onClose={handleClickClosePopup}
          isSubmitted={isSubmitted}
          deleteCard={handleCardDelete}
          data={deletedCardData}
        />

        <InfoToolTip
          isOpen={isInfoToolTipOpen}
          onClose={handleClickClosePopup}
          isSignUp={isSignedUp}
          name={"infoToolTip"}
        />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
