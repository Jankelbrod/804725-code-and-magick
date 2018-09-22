'use strict';

(function () {

  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';

  var getStatus = function (xhr, load, error) {
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        load(xhr.response);
      } else {
        error('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      error('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      error('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    getStatus(xhr, onLoad, onError);
    xhr.timeout = 10000;
    xhr.open('GET', URL_LOAD);
    xhr.send();
  };

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    getStatus(xhr, onLoad, onError);
    xhr.timeout = 10000;
    xhr.open('POST', URL_SAVE);
    xhr.send(data);
  };
})();
