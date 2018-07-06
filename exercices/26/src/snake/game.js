/* global document */
export default class Game {
  constructor(canvasWidth = 900, canvasHeight = 600) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
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
}
