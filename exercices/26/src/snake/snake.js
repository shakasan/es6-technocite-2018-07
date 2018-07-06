export default class Snake {
  constructor(direction, ...body) {
    this.body = body;
    this.direction = direction;
    this.ateApple = false;
  }

  ramp() {
    const nextPosition = this.body[0].slice();
    switch (this.direction) {
      case 'left':
        nextPosition[0] -= 1;
        break;
      case 'right':
        nextPosition[0] += 1;
        break;
      case 'down':
        nextPosition[1] += 1;
        break;
      case 'up':
        nextPosition[1] -= 1;
        break;
      default:
        throw new Error('Invalid Direction');
    }
    this.body.unshift(nextPosition);
    if (!this.ateApple) this.body.pop();
    else this.ateApple = false;
  }

  setDirection(newDirection) {
    let allowedDirections;
    switch (this.direction) {
      case 'left':
      case 'right':
        allowedDirections = ['up', 'down'];
        break;
      case 'up':
      case 'down':
        allowedDirections = ['left', 'right'];
        break;
      default:
        throw new Error('invalid direction');
    }
    if (allowedDirections.includes(newDirection)) {
      this.direction = newDirection;
    }
  }

  isEatingApple(appleToEat) {
    const head = this.body[0];
    if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1]) return true;
  }
}
