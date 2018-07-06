export default class Drawing {
  static drawBlock(ctx, position, blockSize) {
    const [x, y] = position;
    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  }

  static drawSnake(ctx, blockSize, snake) {
    ctx.save();
    ctx.fillStyle = '#FFCC00';
    snake.body.map(block => this.drawBlock(ctx, block, blockSize));
  }
}
