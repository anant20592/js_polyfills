//polyfill for bind
const binding = function (total) {
  amnt = 30;
  price = 400;
  return () => {
    setTimeout(() => {
      console.log('Details -', this.amnt, this.price, total);
    }, 1000);
  };
};

Function.prototype.mybind = function (context, ...args) {
  const that = this;
  return function (...ar) {
    return that.apply(context, args.concat(ar));
  };
};

const newObj = {
  amnt: 40,
  price: 500,
};
//const b = binding.bind(newObj)();
//b();

const c = binding.mybind(newObj, 33)();
c();
