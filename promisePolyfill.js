const one = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('One');
  });
});
const two = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('two');
  }, 1000);
});

const three = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Three');
  }, 5000);
});
const four = 'four';

Promise.racePolyfill = function (promiseArray) {
  return new Promise(async (resolve, reject) => {
    let promiseCompleted = 0;
    let arr = [];
    if (promiseArray.length === 0) resolve([]);
    for (let i = 0; i < promiseArray.length; i++) {
      Promise.resolve(parr[i])
        .then((data) => {
          arr.push(data);
          ++promiseCompleted;
          if (promiseCompleted === promiseArray.length) {
            resolve(arr);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

Promise.all([])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.racePolyfill([])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
