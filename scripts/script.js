const popupAdd = document.querySelector('#popup-add'); // попап добавления
const popupEdit = document.querySelector('#popup-edit'); // попап редактирвания
const popupImg = document.querySelector('#popup-big-img'); // попап картинка
const Img = popupImg.querySelector('.popup__image'); // картинка в попапе
const ImgCaption = popupImg.querySelector('.popup__image-caption'); // подпись к картинке
const editButton = document.querySelector('.profile-info__edit'); // edit button
const exitButtonEdit = popupEdit.querySelector('.popup__exit'); // exit button in edit
const exitButtonAdd = popupAdd.querySelector('.popup__exit'); // exit button in add
const exitButtonImg = popupImg.querySelector('.popup__exit'); //exit button in Figure
const addButton = document.querySelector('.profile__add-button'); // add button
const formElement = document.querySelector('#popup-container-edit');
const addFormElement =document.querySelector('#popup-container-add');
const profileName = document.querySelector('.profile-info__name'); // имя в профиле
const profileOcuppation = document.querySelector('.profile-info__occupation'); //работа в профиле
const nameInput = document.querySelector('#popup-name'); //попап поле - имя
const jobInput  = document.querySelector('#popup-job'); //попап поле - работа
const elements = document.querySelector('.elements'); // выбрали секцию elements
const placeName = document.querySelector('#place-name'); // название места
const pictureLink = document.querySelector('#picture-link'); //ссылка на картинку
const elementsTemplate = document.querySelector('#template-element').content;
const place = elementsTemplate.cloneNode(true);



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

// ф-я отображающая карточки
initialCards.forEach(function(el) {
  const elementsTemplate = document.querySelector('#template-element').content;
  const place = elementsTemplate.cloneNode(true);
  place.querySelector('.element__title').textContent = el.name;
  place.querySelector('.element__image').src = el.link;
  place.querySelector('.element__image').alt = el.name;
  const likeButton = place.querySelector('#element-like');
  likeButton.addEventListener('click', like);
  const deleteButton = place.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteFunc);
  const imageButtons = place.querySelector('.element__image');
  console.log('imageButtons=', imageButtons);
  imageButtons.addEventListener('click', function() {
    popupAction(popupImg);
    Img.src = imageButtons.src;
    Img.alt = imageButtons.alt;
    ImgCaption.textContent = imageButtons.alt;
  });
  elements.append(place);
});


// ф-я ред-я профиль
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOcuppation.textContent = jobInput.value;
  popupAction(popupEdit);
}

// ф-я открытия и закрытия
function popupAction (element) {
  element.classList.toggle('popup_opened');
}

//ф-я добавления карточки
function formCreateHandler (evt) {
  evt.preventDefault();
  const card = {
    name:  '',
    link: ''
  };
  card.name = placeName.value
  card.link = pictureLink.value
  const elementsTemplate = document.querySelector('#template-element').content;
  const place = elementsTemplate.cloneNode(true);
  place.querySelector('.element__title').textContent = card.name;
  place.querySelector('.element__image').src = card.link;
  place.querySelector('.element__image').alt = card.name;
  const likeButton = place.querySelector('#element-like');
  likeButton.addEventListener('click', like);
  const deleteButton = place.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteFunc);
  const imageButtons = place.querySelector('.element__image');
  console.log('imageButtons=', imageButtons);
  imageButtons.addEventListener('click', function() {
    popupAction(popupImg);
    Img.src = imageButtons.src;
    Img.alt = imageButtons.alt;
    ImgCaption.textContent = imageButtons.alt;
  });
  elements.prepend(place);
  popupAction(popupAdd);
}

//ф-я поставить лайк
  function like(evt) {
    evt.target.classList.toggle('element__like_active');
}

//ф-я удалить карточку
 function deleteFunc(evt) {
    evt.target.closest('.element').remove();
 }


// события для попапапа редактирвания
editButton.addEventListener('click', function() {
  popupAction(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileOcuppation.textContent;
});

exitButtonEdit.addEventListener('click', function() {
  popupAction(popupEdit);
});

formElement.addEventListener('submit', formSubmitHandler);

// события для попапа добавления
addButton.addEventListener('click', function() {
  popupAction(popupAdd);
});

 exitButtonAdd.addEventListener('click', function() {
   popupAction(popupAdd);
 });

 addFormElement.addEventListener('submit', formCreateHandler);



 exitButtonImg.addEventListener('click', function() { // закрыть попап большая картинка
  popupAction(popupImg);
});








