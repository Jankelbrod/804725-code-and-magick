'use strict';

// Массив готовых магов
// var wizards = [];

// Количество магов, отрисовываемых на странице
// var WIZARDS_QUANTITY = 4;

// Цвета мантии, глаз и фаербола
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Коды кнопок
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Находим на странице элементы окна настройки персонажа и запсываем их в переменные для дальнейшей работы
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userDialog = document.querySelector('.setup');
var userName = document.querySelector('.setup-user-name');

// Находим на странице элементы волшебника и фаербол
var setupWizard = document.querySelector('.setup-wizard');
var coatColor = setupWizard.querySelector('.wizard-coat');
var eyesColor = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

// Описание мага: имя, фамилия, цвет мантии и цвет глаз
/* var wizardCharacteristic = {
  NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  LASTNAME: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
};

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizards = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards.push({
      fullName: getRandomElement(wizardCharacteristic.NAME) + ' ' + getRandomElement(wizardCharacteristic.LASTNAME),
      coatColor: getRandomElement(wizardCharacteristic.COAT_COLOR),
      eyeColor: getRandomElement(wizardCharacteristic.EYE_COLOR)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.fullName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var createWizards = function () {
  generateWizards(WIZARDS_QUANTITY);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
createWizards();
//userDialog.querySelector('.setup-similar').classList.remove('hidden');
*/

// Обработчик закрытия окна по нажатию на Esc проверяет, наведен ли на поле ввода имени фокус
var onPopupEscPress = function (evt) {
  if (userName !== document.activeElement && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};
// Открывает окно персонажа
var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Закрывет окно персонажа
var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Обработчик события, который открывает окно персонажа при нажатии кнопкой мыши
setupOpen.addEventListener('click', function () {
  openPopup();
});
// Обработчик события, который открывает окно персонажа при нажатии кнопки Enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// Обработчик события, который закрывает окно персонажа при нажатии кнопкой мыши
setupClose.addEventListener('click', function () {
  closePopup();
});
// Если фокус на крестике, окно персонажа закрывается при нажатии Enter
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Функция выбора случайного цвета из массива
var changeColor = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Меняем цвет мантии при нажатии кнопки мыши
coatColor.addEventListener('click', function () {
  var randomColor = changeColor(COAT_COLOR);
  coatColor.style.fill = randomColor;
  document.getElementsByName('coat-color')[0].value = randomColor;
});

// Меняем цвет глаз при нажатии кнопки мыши
eyesColor.addEventListener('click', function () {
  var randomColor = changeColor(EYE_COLOR);
  eyesColor.style.fill = randomColor;
  document.getElementsByName('eyes-color')[0].value = randomColor;
});

// Меняем цвет фаербола при нажатии кнопки мыши
fireball.addEventListener('click', function () {
  var randomColor = changeColor(FIREBALL_COLOR);
  fireball.style.fill = randomColor;
  document.getElementsByName('fireball-color')[0].value = randomColor;
});

