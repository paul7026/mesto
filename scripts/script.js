const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile-info__edit'); // edit button
const exitButton = document.querySelector('.popup__exit'); // exit button
const formElement = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile-info__name'); // имя в профиле
const profileOcuppation = document.querySelector('.profile-info__occupation'); //работа в профиле
const nameInput = document.querySelector('#popup-name'); //попап поле - имя
const jobInput  = document.querySelector('#popup-job'); //попап поле - работа


// ф-я открыть попап
function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileOcuppation.textContent;
  popup.classList.add('popup_opened');
}

// ф-я закрыть попап
function closePopup() {
  popup.classList.remove('popup_opened');
}

// ф-я ред-я профиль
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOcuppation.textContent = jobInput.value;
  closePopup();
}



editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

