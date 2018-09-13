'use strict';

// Массив готовых магов
var wizards = [];

// Количество магов, отрисовываемых на странице
var WIZARDS_QUANTITY = 4;

// Коды кнопок
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Находим на странице элементы окна настройки персонажа и запсываем их в переменные для дальнейшей работы
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');

// Открываем блок с похожими магами
setup.querySelector('.setup-similar').classList.remove('hidden');

// Находим на странице элементы волшебника и фаербол
var setupWizard = setup.querySelector('.setup-wizard');
var coatColor = setupWizard.querySelector('.wizard-coat');
var eyesColor = setupWizard.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

// Описание мага: имя, фамилия, цвет мантии, цвет глаз, цвет фаербола
var wizardCharacteristic = {
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  LASTNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

};

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizards = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    wizards.push({
      fullName: getRandomElement(wizardCharacteristic.NAMES) + ' ' + getRandomElement(wizardCharacteristic.LASTNAMES),
      coatColor: getRandomElement(wizardCharacteristic.COAT_COLORS),
      eyeColor: getRandomElement(wizardCharacteristic.EYES_COLORS)
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

// Открывает окно персонажа
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Закрывет окно персонажа
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Обработчик закрытия окна по нажатию на Esc проверяет, наведен ли на поле ввода имени фокус
var onPopupEscPress = function (evt) {
  if (evt.target !== userName && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
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

// Меняем цвет мантии при нажатии кнопки мыши
coatColor.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardCharacteristic.COAT_COLORS);
  coatColor.style.fill = randomColor;
  setup.querySelector('input[name="coat-color"]').value = randomColor;
});

// Меняем цвет глаз при нажатии кнопки мыши
eyesColor.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardCharacteristic.EYES_COLORS);
  eyesColor.style.fill = randomColor;
  setup.querySelector('input[name="eyes-color"]').value = randomColor;
});

// Меняем цвет фаербола при нажатии кнопки мыши
fireball.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardCharacteristic.FIREBALL_COLORS);
  fireball.style.background = randomColor;
  setup.querySelector('input[name="fireball-color"]').value = randomColor;
});

