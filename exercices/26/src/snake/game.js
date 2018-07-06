import Snake from './snake';
import Drawing from './drawing';

/* global document */
export default class Game {
  constructor(canvasWidth = 900, canvasHeight = 600) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.blockSize = 30;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.snakee = null;
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
    this.tick();
  }

  tick() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    Drawing.drawSnake(this.ctx, this.blockSize, this.snakee);
  }
}
