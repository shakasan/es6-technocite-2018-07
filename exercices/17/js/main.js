/* global window document  $ */
const utils = {
  hexToRgb(hex) {
    if (hex.length === 3) {
      const [hr, hg, hb] = hex;
      return this.hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
    }
    const [r, g, b] = [0, 2, 4]
      .map(offset => hex.substring(offset, offset + 2))
      .map(hexCh => parseInt(hexCh, 16));
    return { r, g, b };
  }
};
console.log(utils.hexToRgb('cf0044'));
console.log(utils.hexToRgb('00FF00'));
console.log(utils.hexToRgb('0f0'));
const app = {
  init() {
    window.$ = window.document.querySelector.bind(document);
    this.inputHEX2RGB = $('#inputHEX2RGB');
    this.buttonHEX2RGB = $('#buttonHEX2RGB');
    this.inputRGB2HEX = $('#inputRGB2HEX');
    this.buttonRGB2HEX = $('#buttonRGB2HEX');
    this.setInteractivity();
  },
  setInteractivity() {
    this.buttonHEX2RGB.addEventListener('click', () => {
      console.log(this.inputHEX2RGB.value);
    });
    this.buttonRGB2HEX.addEventListener('click', () => {
      console.log(this.inputRGB2HEX.value);
    });
  }
};
app.init();
