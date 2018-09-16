'use strict';

window.colorize = function (element, colors, inputName) {

  var setup = document.querySelector('.setup');

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  element.addEventListener('click', function () {
    var color = getRandomElement(colors);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
    setup.querySelector(inputName).value = color;
  })
};
