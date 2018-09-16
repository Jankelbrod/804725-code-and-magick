'use strict';

(function () {
  // Находим на странице элементы окна настройки персонажа и запсываем их в переменные для дальнейшей работы
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');

  window.dialog = {
    setup: setup,
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }
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
    if (evt.target !== userName && evt.keyCode === window.util.ESC_KEYCODE) {
      closePopup();
    }
  };

  // Обработчик события, который открывает окно персонажа при нажатии кнопкой мыши
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  // Обработчик события, который открывает окно персонажа при нажатии кнопки Enter
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Обработчик события, который закрывает окно персонажа при нажатии кнопкой мыши
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  // Если фокус на крестике, окно персонажа закрывается при нажатии Enter
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closePopup);
  });
})();
