import logo from './logo.svg';


function App() {
  return (
    
    <div className="page">
    <header className="header">
      <img className="header__logo" src="./images/logo.svg" alt="Надпись Место, Россия"></img>
    </header>
    <main className="main">
      <section className="profile">
        <button className="profile__edit-avatar">
          <img className="profile__avatar" src="./images/image.jpg" alt="Ив Кусто улыбается"></img>
          <img className="profile__avatar-edit" src="./images/avatar.svg"></img>
      </button>
      <div className="profile__info">
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <button type="button" className="profile__edit-button"><img src="./images/Karandash.svg" alt="Карандаш"></img></button>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button type="button" className="add-button"><img className="add-button__icon" src="./images/Plus.svg" alt="Плюсик"></img></button>
    </section>
    <ul className="elements">
      <template id="element-template">
        <li className="element">
          <button type="button" className="element__basket-button"><img src="./images/basket.svg" alt="Мусорная корзина"></img></button>
          <img className="element__image" src="./images/Karachaevsk.jpg" alt="Древний замок в горах"></img>
          <div className="element__downbar">
            <h2 className="element__title">Карачаевск</h2>
            <button type="button" className="element__button"></button>
            <p className="element__counter"></p>
          </div>
        </li>
      </template>
    </ul>
    <footer className="footer">
      <h2 className="footer__copyright">© 2020 Mesto Russia</h2>
    </footer>
  </main>
  <div className="popupProfile popupProfile_type_edit-card">
    <div className="popupProfile__overlay">
      <div className="popupProfile__container">
        <h2 className="popupProfile__title">Редактировать профиль</h2>
        <form name="profile-form" className="popupProfile__form popupProfile__form_type_edit" novalidate>
          <label for="name-input" className="popupProfile__label">
            <input type="text" placeholder="Имя" name="name" className="popupProfile__input popupProfile__input_type_name" id="name-input" minlength="2" maxlength="40" required></input>
            <span id="input-name-error" className="popupProfile__input-error name-input-error"></span>
          </label>
          <label for="about-input" className="popupProfile__label">
            <input type="text" placeholder="Профессия" name="about" className="popupProfile__input popupProfile__input_type_about" id="about-input" minlength="2" maxlength="200" required></input>
            <span id="input-about-error" className="popupProfile__input-error about-input-error"></span>
          </label>
          <button className="popupProfile__button popupProfile__button_type-load" type="submit">Сохранить</button>
        </form>
        <button type="button" className="popupProfile__close-button popupProfile__close-button_type_card"><img class="popupProfile__close-image" src="./images/Close-Icon.svg" alt="Крестик закрытия"></img> </button>
      </div>
    </div>
  </div>
  <div className="popupProfile popupProfile_type_add-card">
    <div className="popupProfile__overlay">
      <div className="popupProfile__container">
        <h2 className="popupProfile__title">Новое место</h2>
        <form name="new-item-form" className="popupProfile__form popupProfile__form_type_add" novalidate>
          <label for="addname-input" class="popupProfile__label">
            <input type="text" placeholder="Название" name="name" className="popupProfile__input popupProfile__input_type_add-name" id="addname-input" minlength="2" maxlength="30" required></input>
            <span id="input-addname-error" class="popupProfile__input-error addname-input-error"></span>
          </label>
          <label for="url-input" className="popupProfile__label">
            <input type="url" placeholder="Ссылка на картинку" name="link" className="popupProfile__input popupProfile__input_type_link" id="url-input" required></input>
            <span id="input-url-error" className="popupProfile__input-error url-input-error"></span>
          </label>
          <button className="popupProfile__button popupProfile__button_type-load" type="submit">Создать</button>
        </form>
        <button type="button" className="popupProfile__close-button popupProfile__close-button_type_add"><img className="popupProfile__close-image" src="./images/Close-Icon.svg" alt="Крестик закрытия"></img> </button>
      </div>
    </div>
  </div>
  <div className="popupProfile popupProfile_type_img">
    <div className="popupProfile__overlay">
      <div className="popupProfile__container-img">
        <img className="popupProfile__img" src="#" alt="#"></img> 
        <h2 className="popupProfile__title-img"></h2>
        <button type="button" className="popupProfile__close-button popupProfile__close-button_type_img"><img className="popupProfile__close-image" src="./images/Close-Icon.svg" alt="Крестик закрытия"></img></button>
      </div>
    </div>
  </div>
  <div className="popupProfile popupProfile_type_del">
    <div className="popupProfile__overlay">
      <div className="popupProfile__container-del">
        <h2 className="popupProfile__title">Вы уверены?</h2>
        <form className="popupProfile__form popupProfile__form_type_del" action="" name="" novalidate>
          <button className="popupProfile__button popupProfile__button_type-load" type="submit">Да</button>
        </form>
        <button type="button" className="popupProfile__close-button popupProfile__close-button_type_del"><img className="popupProfile__close-image" src="./images/Close-Icon.svg" alt="Крестик закрытия"></img></button>
      </div>
    </div>
  </div>

  <div className="popupProfile popupProfile_type_edit-avatar">
    <div className="popupProfile__overlay">
      <div className="popupProfile__container-ava">
        <h2 className="popupProfile__title">Обновить аватар</h2>
        <form name="new-item-form" className="popupProfile__form popupProfile__form_type_edit-avatar" novalidate>
          <label for="url-input" className="popupProfile__label">
            <input type="url" placeholder="Ссылка на картинку" name="link" className="popupProfile__input popupProfile__input_type_link" id="url-input-ava" required></input>
            <span id="input-url-error-ava" className="popupProfile__input-error url-input-ava-error"></span>
          </label>
          <button class="popupProfile__button popupProfile__button_type-load" type="submit">Сохранить</button>
        </form>
        <button type="button" class="popupProfile__close-button popupProfile__close-button_type_edit-avatar"><img class="popupProfile__close-image" src="./images/Close-Icon.svg" alt="Крестик закрытия"></img></button>
      </div>
    </div>
  </div>
  </div>
  );
}

export default App;