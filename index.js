// Import stylesheets
import './style.css';
import './arrayPolyfill.js';
import './promisePolyfill.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1> JS Polyfills</h1>`;

const arr = [1, 2, 3, 4];

const newArr = arr.myMap((el) => el * 2);

console.log(newArr);

const filteredArr = newArr.myFilter((el) => el > 4);

console.log(filteredArr);

const updatedArr = [];

filteredArr.myForEach((el) => {
  updatedArr.push(el * 4);
});

console.log(updatedArr);

const objArr = [
  { item: 'pen', price: 100 },
  { item: 'notebook', price: 200 },
];

const sum = objArr.myReduce((prev, curr) => {
  const total = prev + curr.price;
  return total;
}, 0);

console.log(sum);
