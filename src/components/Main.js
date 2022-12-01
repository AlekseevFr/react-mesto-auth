
import React from 'react';
import karandash from '../images/Karandash.svg';
import plus from '../images/Plus.svg';
import edit from '../images/avatar.svg';
import basket from '../images/basket.svg';
import Footer from  './Footer.js';
import api from "../utils/Api.js";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);
  
 
  React.useEffect(() => {
      api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      console.log(newCard)
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
} 

  
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Загруженное фото"></img>
          <img className="profile__avatar-edit" src={edit}></img>
      </button>
      <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button type="button" className="profile__edit-button" onClick={onEditProfile}><img src={karandash} alt="Карандаш"></img></button>
        <p className="profile__subtitle">{currentUser.about}</p>
      </div>
      <button type="button" className="add-button" onClick={onAddPlace}><img className="add-button__icon" src={plus} alt="Плюсик"></img></button>
    </section>
    <ul className="elements">
      
      {cards.map(card => (
        <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={handleCardLike}/>
      ))}
      
    </ul>

    <Footer />
  </main>
  )
}

export default Main;