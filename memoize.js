//polyfill for memoize function

function getTotal(max) {
  let i = 0;
  let total = 0;
  while (i < max) {
    total += i;
    ++i;
  }
  return total;
}

function memoize(callback) {
  const cache = {};
  return (param) => {
    if (cache[param]) return cache[param];
    else {
      cache[param] = callback(param);
      return cache[param];
    }
  };
}

console.time('start');

const dd = memoize(getTotal);
//getTotal(10000000);
dd(10000000);
console.timeEnd('start');
console.time('start2');
dd(10000000);
//getTotal(10000000);
console.timeEnd('start2');
console.time('start3');
dd(10000000);
//getTotal(10000000);
console.timeEnd('start3');
