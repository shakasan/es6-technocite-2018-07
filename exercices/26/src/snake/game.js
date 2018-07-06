import Snake from './snake';
import Drawing from './drawing';
import Apple from './apple';

/* global document */
export default class Game {
  constructor(canvasWidth = 900, canvasHeight = 600) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.blockSize = 30;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.timeout = null;
    this.delay = 100;
    this.snakee = null;
    this.applee = null;
  }

  init() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.canvas.style.border = '30px solid gray';
    this.canvas.style.margin = '50px auto';
    this.canvas.style.display = 'block';
    this.canvas.style.backgroundColor = '#ddd';
    document.body.appendChild(this.canvas);
  }

  launch() {
    this.snakee = new Snake('right', [6, 4], [5, 4], [4, 4], [3, 4], [2, 4]);
    this.applee = new Apple();
    this.tick();
  }

  tick() {
    this.snakee.ramp();
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    Drawing.drawSnake(this.ctx, this.blockSize, this.snakee);
    Drawing.drawApple(this.ctx, this.blockSize, this.applee);
    this.timeOut = setTimeout(this.tick.bind(this), this.delay);
  }
}
