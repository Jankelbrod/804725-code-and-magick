'use strict';

var wizard = [];

var wizardCharacteristic = {
  name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyeColor: ['black', 'red', 'blue', 'yellow', 'green']
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizards = function (quantity) {
var wizards;
for (var i = 0; i < quantity; i++) {
wizards = {
name: getRandomElement(wizardCharacteristic.name) + ' ' + getRandomElement(wizardCharacteristic.lastname),
coatColor: getRandomElement(wizardCharacteristic.coatColor),
eyeColor: getRandomElement(wizardCharacteristic.eyeColor)
}
wizard.push(wizards);
}
return wizard;
};

var renderWizard = function (arr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = arr.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arr.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var createWizard = function() {
  generateWizards(4);
  for (var i = 0; i < wizard.length; i++) {
    fragment.appendChild(renderWizard(wizard[i]));
  }
  similarListElement.appendChild(fragment);
};
createWizard();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
