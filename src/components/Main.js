import kusto from '../images/image.jpg';
import React from 'react';
import karandash from '../images/Karandash.svg';
import plus from '../images/Plus.svg';
import edit from '../images/avatar.svg';
import Footer from  './Footer.js';
import api from "../utils/Api.js";

function Main(props) {

  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('#');
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.error(err));
      api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch(err => console.error(err));
  }, []);
  console.log(cards)
  
  return (
    <main className="main">
      <section className="profile">
        <button className="profile__edit-avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Загруженное фото"></img>
          <img className="profile__avatar-edit" src={edit}></img>
      </button>
      <div className="profile__info">
        <h1 className="profile__title">{userName}</h1>
        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img src={karandash} alt="Карандаш"></img></button>
        <p className="profile__subtitle">{userDescription}</p>
      </div>
      <button type="button" className="add-button" onClick={props.onAddPlace}><img className="add-button__icon" src={plus} alt="Плюсик"></img></button>
    </section>
    <ul className="elements">
      <template id="element-template">
      {cards.map(card => (
        <li className="element" key={card._id}>
          <button type="button" className="element__basket-button"><img src="./images/basket.svg" alt="Мусорная корзина"></img></button>
          <img className="element__image" src={card.link} alt={card.name}></img>
          <div className="element__downbar">
            <h2 className="element__title">{card.name}</h2>
            <button type="button" className="element__button"></button>
            <p className="element__counter"></p>
          </div>
        </li>
      ))}
      </template>
    </ul>
    
    <Footer />
  </main>
  )
}

export default Main;