'use strict';

(function () {
  // Массив готовых магов
  var wizards = [];
  // Количество магов, отрисовываемых на странице
  var WIZARDS_QUANTITY = 4;
  // Находим на странице элементы волшебника и фаербол
  var setupWizard = window.dialog.setup.querySelector('.setup-wizard');
  var coatColor = setupWizard.querySelector('.wizard-coat');
  var eyesColor = setupWizard.querySelector('.wizard-eyes');
  var fireball = window.dialog.setup.querySelector('.setup-fireball-wrap');
  // Описание мага: имя, фамилия, цвет мантии, цвет глаз, цвет фаербола
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var similarListElement = window.dialog.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var generateWizards = function (quantity) {
    for (var i = 0; i < quantity; i++) {
      wizards.push({
        fullName: window.dialog.getRandomElement(NAMES) + ' ' + window.dialog.getRandomElement(LASTNAMES),
        coatColor: window.dialog.getRandomElement(COAT_COLORS),
        eyeColor: window.dialog.getRandomElement(EYES_COLORS)
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
  // Открываем блок с похожими магами
  window.dialog.setup.querySelector('.setup-similar').classList.remove('hidden');
  var createWizards = function () {
    var fragment = document.createDocumentFragment();
    generateWizards(WIZARDS_QUANTITY);
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
  createWizards();

  // Меняем цвет мантии при нажатии кнопки мыши
  window.colorize(coatColor, COAT_COLORS, 'input[name="coat-color"]');
  // Меняем цвет глаз при нажатии кнопки мыши
  window.colorize(eyesColor, EYES_COLORS, 'input[name="eyes-color"]');
  // Меняем цвет фаербола при нажатии кнопки мыши
  window.colorize(fireball, FIREBALL_COLORS, 'input[name="fireball-color"]');
})();
