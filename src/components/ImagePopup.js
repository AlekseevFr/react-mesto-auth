import Close from '../images/Close-Icon.svg';
function ImagePopup() {

  return (
    <div className="popupProfile popupProfile_type_img">
    <div className="popupProfile__overlay">
      <div className="popupProfile__container-img">
        <img className="popupProfile__img" src="#" alt="#"></img>
        <h2 className="popupProfile__title-img"></h2>
        <button type="button" className="popupProfile__close-button popupProfile__close-button_type_img">
          <img className="popupProfile__close-image" src={Close} alt="Крестик закрытия"></img>
        </button>
      </div>
    </div>
  </div>
  );
}

export default ImagePopup;