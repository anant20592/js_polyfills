//add event listener on array push method

Array.prototype.addListener = function (event, callback) {
  if (event === 'add') {
    console.log(this, arguments);
    callback.apply(this);
  }
};

const arr = [];
arr.addListener('add', showArray);

Array.prototype.mypush = function (element) {
  this.push(element);
  this.addListener('add', this);
};

function showArray(array) {
  console.log(array);
}

arr.mypush(33);
