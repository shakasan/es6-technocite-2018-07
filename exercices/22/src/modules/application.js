export default class Application {
  constructor(url) {
    this.url = url;
    this.data = null;
    this.loadJson();
  }

  loadJson() {
    fetch(this.url)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.data = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getTitles() {
    return this.data.reduce((prev, next) => `${prev}<li>${next.filename}</li>`, '');
  }
}
