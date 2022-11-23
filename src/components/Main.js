
import React from 'react';
import karandash from '../images/Karandash.svg';
import plus from '../images/Plus.svg';
import edit from '../images/avatar.svg';
import basket from '../images/basket.svg';
import Footer from  './Footer.js';
import api from "../utils/Api.js";
import Card from "./Card";

function Main(props) {
  
  const [userName, setUserName] = React.useState('. . .');
  const [userDescription, setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('#');
  const [cards, setCards] = React.useState([]);
  const [currentId, setCurrentId] = React.useState();
  
 
  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCurrentId(res.currentId)
      })
      .catch(err => console.error(err));
      api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      
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
      
      {cards.map(card => (
        <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
      ))}
      
    </ul>

    <Footer />
  </main>
  )
}

export default Main;