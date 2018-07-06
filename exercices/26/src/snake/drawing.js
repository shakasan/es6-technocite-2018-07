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

  static drawApple(ctx, blockSize, apple) {
    const radius = blockSize / 2;
    const x = apple.position[0] * blockSize + radius;
    const y = apple.position[1] * blockSize + radius;
    ctx.save();
    ctx.fillStyle = '#11FF22';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  }
}
