import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
    Напиши обработчик нажатия на кнопку.
    При нажатии должно выводиться диалоговое окно с сообщением «Отправлено».
 */
function kek() {
  console.log('kek');
}

const func = () => {
  alert('Отправлено')
}

ReactDom.render(
  <div className="root">
    <div className="form">
      <div style={{ marginBottom: '10px' }}>Нажми отправить</div>
<<<<<<< HEAD
      <input onClick={() => { alert('kek') }} type="button" className="button" value="Отправить" />
=======
      <input type="button" onClick={kek} className="button" value="Отправить" />
>>>>>>> e52be24aa8cb8701fe3121d0049bfc284fb1c535
    </div>
  </div>,
  document.getElementById('app')
);

/**
    Подсказки:
    - alert(msg) — создает простое диалоговое окно с сообщением msg
    - Компоненты React, соответствующие HTML, поддерживают атрибуты onClick, onChange и т.д.
      В них можно передать функцию-обработчик события.
    - Стрелочные функции: (x, y) => { return x + y; } — «непроизводительный»,
      но быстрый способ написать обработчик событий
 */
