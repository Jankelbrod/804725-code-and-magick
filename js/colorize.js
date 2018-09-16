'use strict';

window.colorize = function (element, colors, inputName) {
  element.addEventListener('click', function () {
    var color = window.dialog.getRandomElement(colors);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    window.dialog.setup.querySelector(inputName).value = color;
  });
};
