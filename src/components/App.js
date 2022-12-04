import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

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
  function handleUpdateUser(info) {
    api.editUser(info)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        closeAllPopups();
      })
  }
  function handleUpdateAvatar ({avatar}) {
    api.changeAvatar(avatar)
    .then(newInfo => {
      setCurrentUser(newInfo);
    })
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 

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

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 

      <ImagePopup onClose={closeAllPopups}  card={selectedCard} isOpen={Boolean(selectedCard)}/>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
