// Import stylesheets
import './style.css';
import './arrayPolyfill.js';
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

const sum = newArr.myReduce((prev, curr) => {
  console.log(prev, curr);
  const total = prev + curr;
  return total;
}, 0);

console.log(sum);
