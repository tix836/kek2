import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
     1. Разбери ручные переборы массивов в верстке.
        Для постов используй map без циклов, для авторов цикл for без map.
    
     2. Посмотри ошибки в Chrome DevTools: React должен требовать наличия атрибутов key.
        Добавь в post поле id и присвой каждому полю уникальный строковый идентификатор.
        Используй id в качестве значения key в основном тэге поста и основном тэге автора.
 */

const posts = [
  {
    author: 'Парень не промах',
    time: '2 часа назад',
    message: 'Попробую с удовольствием ;)',
    id: 1
  },
  {
    author: 'Милая девушка',
    time: '3 часа назад',
    message: 'Можно использовать для выпекания чизкейков :)',
    id: 2
  },
  {
    author: 'Скупец',
    time: 'вчера',
    message: 'Цену-то загнули!',
    id: 3
  }
];

function renderPost(post) {
  return (
<<<<<<< HEAD
    <div className="post" key={post.id}>
=======
    <div key={[post.id]} className="post">
>>>>>>> e52be24aa8cb8701fe3121d0049bfc284fb1c535
      <div className="postHeader">
        <span className="postAuthor">{post.author}</span>
        <br />
        <span className="postTime">{post.time}</span>
      </div>
      <div className="postMessage">{post.message}</div>
    </div>
  );
}

function renderAuthors(posts) {
  let authors = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    authors.push(<span key={post.id}>{post.author}</span>)
  }
  return (
    <div className="authors">
      {authors}
    </div>
  );
}

ReactDom.render(
  <div className="page">
<<<<<<< HEAD
    {/* функция ниже не отрисовывается, но если я удалю фигурные скобки внутри map проблемы не будет */}
    <div className="posts">{posts.map((post) => { return renderPost(post) })}</div>
=======
    <div className="posts">
      {posts.map(post  => {
        return renderPost(post)
      })}
    </div>
>>>>>>> e52be24aa8cb8701fe3121d0049bfc284fb1c535
    {renderAuthors(posts)}
  </div>,
  document.getElementById('app')
);

/**
     Подсказки:
     - Отображение массива в другой массив записывается так:
       const values = items.map(item => item.field);
     - В конец массивов можно добавлять значения методом push:
       const numbers = [];
       numbers.push(1);
     - Выбери подходящий цикл for:
       - for (let i = 0; i < items.length; i++) {}
       - for (let key in items) {}
       - for (const item of items) {}
 */
