'use strict';

(function () {
  // Коды кнопок
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    ESC_KEYCODE: ESC_KEYCODE,

    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  };
})();
