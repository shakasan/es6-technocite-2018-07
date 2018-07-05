import Application from './modules/application';

const app = new Application('https://picsum.photos/list');

setTimeout(() => {
  document.querySelector('#wrapper ul').innerHTML = app.getTitles();
}, 1000);
