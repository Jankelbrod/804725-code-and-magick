'use strict';

(function () {
  // Количество магов, отрисовываемых на странице
  var WIZARDS_QUANTITY = 4;
  // Находим на странице элементы волшебника и фаербол
  var setupWizard = window.dialogSetup.querySelector('.setup-wizard');
  var coatColor = setupWizard.querySelector('.wizard-coat');
  var eyesColor = setupWizard.querySelector('.wizard-eyes');
  var fireball = window.dialogSetup.querySelector('.setup-fireball-wrap');

  // Описание мага: цвет мантии, цвет глаз, цвет фаербола
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var similarListElement = window.dialogSetup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  // Открываем блок с похожими магами
  window.dialogSetup.querySelector('.setup-similar').classList.remove('hidden');

  // Меняем цвет мантии при нажатии кнопки мыши
  window.colorize(coatColor, COAT_COLORS, window.dialogSetup.querySelector('input[name="coat-color"]'));
  // Меняем цвет глаз при нажатии кнопки мыши
  window.colorize(eyesColor, EYES_COLORS, window.dialogSetup.querySelector('input[name="eyes-color"]'));
  // Меняем цвет фаербола при нажатии кнопки мыши
  window.colorize(fireball, FIREBALL_COLORS, window.dialogSetup.querySelector('input[name="fireball-color"]'));

  var form = window.dialogSetup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      window.dialogSetup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(window.util.getRandomElement(wizards)));
    }
    similarListElement.appendChild(fragment);

    window.dialogSetup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 386px 272px; text-align: center; background-color: #e32636; border-radius: 0% 0% 50% 50%; padding: 30px;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.bottom = '67px';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();
