import React, { useEffect, useState } from "react";
import Input from "./Input";
import PopupWithForm from "./PopupWithForm";
import {useFormInputsValidate} from "../hooks/useForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, isSubmitted }) => {
  const { values, errors, isValid = false, handleChange, restForm } = useFormInputsValidate();

  useEffect(() => {
    restForm()
  }, [isOpen, restForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted) {
      return;
    }

    onAddPlace(values);
  };

  return (
      <PopupWithForm
          name={"user-card"}
          title={"Новое место"}
          button={!isSubmitted ? "Создать" : "Сохранение"}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          isDisabled={!isValid}
      >
          <label className="form__fieldset" htmlFor="place-name-input">
              <input
                type="text"
                name="name"
                id="place-name"
                className="form__input"
                placeholder="Название (обязательно)"
                required
                maxLength="30"
                minLength="2"
                value={values.name || ""}
                onChange={handleChange}
              />
              <span className="form__input-error" id="place-name-input-error">
                  {errors.name || ""}
              </span>
          </label>
          <label className="form__fieldset" htmlFor="place-link-input">
              <input
                type="url"
                name="link"
                id="place-link"
                className="form__input"
                placeholder="Ссылка на картинку (обязательно)"
                required
                value={values.link || ""}
                onChange={handleChange}
              />
              <span className="form__input-error" id="place-link-input-error">
                  {errors.link || ""}
              </span>
          </label>
      </PopupWithForm>
  );
}

export default AddPlacePopup;

//   const [placeName, setPlaceName] = useState("");
//   const [placeLink, setPlaceLink] = useState("");
//
//   useEffect(() => {
//     if (!isSubmitted) {
//       setPlaceName("");
//       setPlaceLink("");
//     }
//   }, [isSubmitted]);
//
//   const handlePlaceLinkChange = (e) => {
//     setPlaceLink(e.target.value);
//   };
//
//   const handlePlaceNameChange = (e) => {
//     setPlaceName(e.target.value);
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     if (isSubmitted) {
//       return;
//     }
//
//     onAddPlace({
//       name: placeName,
//       link: placeLink,
//     });
//   };
//
//   return (
//     <PopupWithForm
//       name={"user-card"}
//       title={"Новое место"}
//       button={!isSubmitted ? "Создать" : "Сохранение"}
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//       idSubmitted={isSubmitted}
//     >
//       <Input
//         type="text"
//         value={placeName || ""}
//         id="place-name"
//         placeholder="Название (обязательно)"
//         name="placeNameInput"
//         required={true}
//         maxLength="30"
//         minLength="2"
//         onChange={handlePlaceNameChange}
//       />
//       <Input
//         type="url"
//         value={placeLink || ""}
//         id="place-link"
//         placeholder="Ссылка на картинку (обязательно)"
//         name="placeLinkInput"
//         required={true}
//         onChange={handlePlaceLinkChange}
//       />
//     </PopupWithForm>
//   );
// };


