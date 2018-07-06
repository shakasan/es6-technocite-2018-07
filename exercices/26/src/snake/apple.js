export default class Apple {
  constructor(position = [10, 10]) {
    this.position = position;
  }

  setNewPosition(widthInBlocks, heightInBlocks) {
    const newX = Math.round(Math.random() * widthInBlocks - 1);
    const newY = Math.round(Math.random() * heightInBlocks - 1);
    this.position = [newX, newY];
  }
}
