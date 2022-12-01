import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
      .catch(console.error);
  }, [])

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setselectedCard(card);
    
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setselectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      />
      <PopupWithForm name="edit-card" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label htmlFor="name-input" className="popupProfile__label">
          <input type="text" placeholder="Имя" name="name" className="popupProfile__input popupProfile__input_type_name" id="name-input" minLength="2" maxLength="40" required></input>
          <span id="input-name-error" className="popupProfile__input-error name-input-error"></span>
        </label>
        <label htmlFor="about-input" className="popupProfile__label">
          <input type="text" placeholder="Профессия" name="about" className="popupProfile__input popupProfile__input_type_about" id="about-input" minLength="2" maxLength="200" required></input>
          <span id="input-about-error" className="popupProfile__input-error about-input-error"></span>
        </label>
       
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label htmlFor="addname-input" className="popupProfile__label">
          <input type="text" placeholder="Название" name="name" className="popupProfile__input popupProfile__input_type_add-name" id="addname-input" minLength="2" maxLength="30" required></input>
          <span id="input-addname-error" className="popupProfile__input-error addname-input-error"></span>
        </label>
        <label htmlFor="url-input" className="popupProfile__label">
          <input type="url" placeholder="Ссылка на картинку" name="link" className="popupProfile__input popupProfile__input_type_link" id="url-input" required></input>
          <span id="input-url-error" className="popupProfile__input-error url-input-error"></span>
        </label>
        
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?"/>

      <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label htmlFor="url-input" className="popupProfile__label">
          <input type="url" placeholder="Ссылка на картинку" name="link" className="popupProfile__input popupProfile__input_type_link" id="url-input-ava" required></input>
          <span id="input-url-error-ava" className="popupProfile__input-error url-input-ava-error"></span>
        </label>
        
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups}  card={selectedCard} isOpen={Boolean(selectedCard)}/>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
