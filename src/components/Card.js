function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
  <li className="element">
  <button
    type="button"
    className={`element__basket-button ${props.currentId === props.card.ownerId ? 'element__basket-button_show' : ''}`}
  ></button>
  <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick}></img>
  <div className="element__downbar">
    <h2 className="element__title">{props.card.name}</h2>
    <button type="button" className="element__button"></button>
    <p className="element__counter">{props.card.likes.length}</p>
  </div>
</li>
)}

export default Card;