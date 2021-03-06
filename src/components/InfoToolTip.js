import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const InfoToolTip = ({ isOpen, onClose, name }) => {
  const { authUserData, isSignedUp } = useContext(CurrentUserContext);

  // console.log(authUserData.message)
  return (
    <section
      className={`popup page__popup section ${
        isOpen ? "page__popup_visible" : ""
      }`}
      id={`edit-${name}`}
      onClick={onClose}
    >
      <div className="popup__window popup__window_size_s">
        <div
          className={`popup__icon ${
            isSignedUp
              ? "popup__icon_status_succeed"
              : "popup__icon_status_fault"
          }`}
        />
        <h2 className="popup__title popup__title_pos_centered">
          {authUserData.message}
        </h2>
        <button
          arial-lable="Закрыть форму без сохранения данных"
          tittle="Закрыть"
          type="button"
          className="button popup__button-close"
          onClick={onClose}
        />
      </div>
    </section>
  );
};

export default InfoToolTip;
