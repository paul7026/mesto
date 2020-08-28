const popupAdd = document.querySelector('#popup-add'); // попап добавления
const popupEdit = document.querySelector('#popup-edit'); // попап редактирвания
const popupImg = document.querySelector('#popup-big-img'); // попап картинка
const img = popupImg.querySelector('.popup__image'); // картинка в попапе
const imgCaption = popupImg.querySelector('.popup__image-caption'); // подпись к картинке
const editButton = document.querySelector('.profile-info__edit'); // edit button
const exitButtonEdit = popupEdit.querySelector('.popup__exit'); // exit button in edit
const exitButtonAdd = popupAdd.querySelector('.popup__exit'); // exit button in add
const exitButtonImg = popupImg.querySelector('.popup__exit'); //exit button in Figure
const addButton = document.querySelector('.profile__add-button'); // add button
const formElement = document.querySelector('#popup-container-edit');
const addFormElement = document.querySelector('#popup-container-add');
const profileName = document.querySelector('.profile-info__name'); // имя в профиле
const profileOccuppation = document.querySelector('.profile-info__occupation'); //работа в профиле
const nameInput = document.querySelector('#popup-name'); //попап поле - имя
const jobInput = document.querySelector('#popup-job'); //попап поле - работа
const elements = document.querySelector('.elements'); // выбрали секцию elements
const placeName = document.querySelector('#place-name'); // название места
const pictureLink = document.querySelector('#picture-link'); //ссылка на картинку


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//ф-я создающая карточку из template для места
function createCard(el) {
  const elementsTemplate = document.querySelector('#template-element').content;
  const place = elementsTemplate.cloneNode(true);
  const placeTitle = place.querySelector('.element__title');
  const placeImg = place.querySelector('.element__image');
  placeTitle.textContent = el.name;
  placeImg.src = el.link;
  placeImg.alt = el.name;
  const likeButton = place.querySelector('#element-like');
  likeButton.addEventListener('click', toggleLike);
  const deleteButton = place.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteFunc);
  const imageButtons = place.querySelector('.element__image');
  imageButtons.addEventListener('click', function () {
    togglePopup(popupImg);
    img.src = imageButtons.src;
    img.alt = imageButtons.alt;
    imgCaption.textContent = imageButtons.alt;
  });
  return place;
}

//ф-я добавления карточек из массива initialCards
 initialCards.forEach(function (initialCards) {
   elements.append(createCard(initialCards));
 });

// ф-я ред-я профиль
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccuppation.textContent = jobInput.value;
  togglePopup(popupEdit);
}

// ф-я открытия и закрытия
function togglePopup(element) {
  element.classList.toggle('popup_opened');
}

//ф-я добавления карточки
function handleFormCreate(evt) {
  evt.preventDefault();
  const card = {
    name: '',
    link: ''
  };
  card.name = placeName.value
  card.link = pictureLink.value
  elements.prepend(createCard(card));
  togglePopup(popupAdd);
}

//ф-я поставить лайк
function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

//ф-я удалить карточку
function deleteFunc(evt) {
  evt.target.closest('.element').remove();
}


// события для попапапа редактирвания
editButton.addEventListener('click', function () {
  togglePopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccuppation.textContent;
});

exitButtonEdit.addEventListener('click', function () {
  togglePopup(popupEdit);
});

formElement.addEventListener('submit', handleFormSubmit);

// события для попапа добавления
addButton.addEventListener('click', function () {
  togglePopup(popupAdd);
});

exitButtonAdd.addEventListener('click', function () {
  togglePopup(popupAdd);
});

addFormElement.addEventListener('submit', handleFormCreate);



exitButtonImg.addEventListener('click', function () { // закрыть попап большая картинка
  togglePopup(popupImg);
});








