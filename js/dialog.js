'use strict';

(function () {
  // Находим на странице элементы окна настройки персонажа и запсываем их в переменные для дальнейшей работы
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userName = setup.querySelector('.setup-user-name');
  var dialogHandler = setup.querySelector('.upload');

  window.dialogSetup = setup;

  // Открывает окно персонажа
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Закрывет окно персонажа
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = null;
    setup.style.left = null;
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
    window.util.isEnterEvent(evt, closePopup);
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

      };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault)
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

      };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    });
  })();
