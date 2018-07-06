/* global window document */
import Game from './snake/game';

window.onload = () => {
  const snakeGame = new Game();
  document.addEventListener('keydown', e => {
    const key = e.keyCode;
    let newDirection;
    switch (key) {
      case 37:
        newDirection = 'left';
        break;
      case 38:
        newDirection = 'up';
        break;
      case 39:
        newDirection = 'right';
        break;
      case 40:
        newDirection = 'bottom';
        break;
      default:
    }
    console.log(newDirection);
  });
  snakeGame.init();
};
