'use strict';

(function () {
  window.colorize = function (element, colors, selector) {
  element.addEventListener('click', function () {
    var color = window.dialog.getRandomElement(colors);
    if (element.tagName.toLowerCase() === 'div') {
      element.style.backgroundColor = color;
    } else {
      element.style.fill = color;
    }
      selector.value = color;
  });
};
})();
