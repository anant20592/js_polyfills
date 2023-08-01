// map polyfill

Array.prototype.myMap = function (func) {
  const arr1 = [];
  for (let i = 0; i < this.length; i++) {
    arr1.push(func(this[i]));
  }
  return arr1;
};

//filter polyfill

Array.prototype.myFilter = function (func) {
  const arr1 = [];
  for (let i = 0; i < this.length; i++) {
    const isValid = func(this[i]);
    if (isValid) arr1.push(this[i]);
  }
  return arr1;
};

//forEach polyfill

Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

//reduce polyfill

Array.prototype.myReduce = function (func, initialVal) {
  let prevVal = initialVal;
  let currVal;
  for (let i = 0; i < this.length; i++) {
    currVal = this[i];
    prevVal = func(prevVal, currVal);
  }
  return prevVal;
};
