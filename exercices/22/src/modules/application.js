export default class Application {
  constructor(url) {
    this.url = url;
    this.data = null;
    // this.loadJson();
  }

  loadJson() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then(result => result.json())
        .then(data => {
          // console.log(data);
          this.data = data;
          resolve('data loaded');
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getTitles() {
    return this.data.reduce((prev, next) => `${prev}<li>${next.filename}</li>`, '');
  }
}
