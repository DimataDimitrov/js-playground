// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const myPets = ['Andreea', 'Makso', 'Mitko'];
const reversedpets = myPets.reverse();
console.log(reversedpets);

// //Find and make  line in html for all pets starting  with letter M
// console.log(myPets.filter((el) => el.startsWith('M')));
// console.log(myPets.filter(element => element.includes("a")));
// console.log(myPets.reverse());

console.log(reversedpets[0]);

const ordered = [reversedpets[0], reversedpets[2], reversedpets[1]];
console.log(ordered);

const orderedsmile = [
  reversedpets[0] + ' :)',
  reversedpets[2] + ' :)',
  reversedpets[1] + ' :)',
];
const smileorrder = ordered.map((el) => el + ' :)');

console.log(orderedsmile);
console.log(smileorrder);

const kek = '"Krek"';
console.log(kek);

const numArr = [11, 52, 35, 49, 5, 26, 117];
// 1. Find the biggest number in the array
const maxnum = Math.max(...numArr);
console.log(maxnum);
// Feedback: Perfect!

// 2. Find the smallest number in the array
const minnum = Math.min(...numArr);
console.log(minnum);
// Feedback: Perfect!

// 3. Find the sum of all numbers in the array
let numsum = 0;
numArr.forEach((item) => {
  numsum += item;
});
console.log(numsum);
// Feedback: Very good! Now do it with the reduce() function

// Feedback on Feedback xD
console.log(numArr.reduce((a, b) => a + b, 0));

// 4. Order the numbers in ascending order and display it in HTML
const ascnum = numArr.sort((a, b) => a - b);
console.log(ascnum);
document.getElementById('asc').innerHTML = '<b>' + ascnum + '<b>';
// Feedback: Perfect

// 5. Order the numbers in descending order
const descnum = numArr.sort((a, b) => b - a);
console.log(descnum);
// Feedback: Very good but I would rather write it: .sort((a, b) => b - a) as it shows the proper order
// Feedback on Feedback xD: whats the difference?

// 6. Find the sum of all two digit numbers and display it in HTML
let numsumtwo = 0;
numArr.forEach((item) => {
  const itemlenght = item.toString().length;
  if (itemlenght == 2) {
    numsumtwo += item;
  }
});
console.log(numsumtwo);
document.getElementById('numsum').innerHTML = '<b>' + numsumtwo + '<b>';
// Find the sum of all two digit numbers with filter
// I know its not the best option, but it is what it is..
var numsumtwofilt = 0;
let filt_array1 = numArr.filter(function (value) {
  if (value >= 10 && value <= 99) {
    numsumtwofilt = numsumtwofilt + value;
  }
});
console.log(numsumtwofilt);

//another option with filter, maybe better then the previous one..
var numsumtwofilt1 = 0;
let filt_array2 = numArr.filter(function (value) {
  if (value.toString().length == 2) {
    numsumtwofilt1 = numsumtwofilt1 + value;
  }
});
console.log(numsumtwofilt1);

// Find the sum of all two digit numbers with reduce
var numsumtwofiltreduce = 0;
const Numbers = numArr.reduce((accumulator, currentValue) => {
  if (currentValue.toString().length == 2) {
    numsumtwofiltreduce = currentValue + numsumtwofiltreduce;
  }
}, []);
console.log(numsumtwofiltreduce);

// 7. Find all numbers which are even
// 8. Rotate the array three times so that the end result would look like this: '[5, 26, 117, 11, 52, 35, 49]'

const person1 = {
  name: 'Asen',
  age: 25,
  job: 'Markuch',
  city: 'Sofia',
  pets: ['Dog', 'Cat', 'Cow'],
};

// 1. Console log the name of the object
// 2. Console log all pets starting with C
// 3. Console.log all pets containing O and display it in HTML

const person2 = {
  name: 'Ceco',
  age: 33,
  job: 'Kenev',
  city: 'Peshtera',
  pets: ['Cow', 'Horse', 'Tiger', 'Cat'],
};

// 1. Find which person is older and console log his name
// 2. Find all pets which are the same for both people
// 3. Create an array with both people and order it by their name
// 4. Create an array with both people and order it by the number of animals they have
// 5. Add a last name to person1 and console log new the new object
// 6. Remove the job from person1
// 7. Change the name of person1 and display it in HTML
// 8. Display person1 information in HTML

const duplicates = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7];
// 1. Remove the duplicates from the list
// 2. Count how many occurances of each number there are (Example: [{1: 3}, {2: 2}, {3: 5} ...])
// 3. Find the sum of all unique numbers
// 4. Find all numbers that occur only once and display it in HTML

const basicString = 'NeMeZanimavaiSGluposti';
// 1. Turn the string to lower case
// 2. Turn the string to upper case
// 3. Split the string to words
// 4. Turn all upper case letters to lower cace and all lower case letters to uper case
// 5. Create a list of letters from the string
// 6. Count how many times each letter occurs in the string and display it (Example: [{'a': 3}, {'b': 2}, {'c': 5} ...])
// 7. Rotate the string three times so that the result will look like this: 'stiNeMeZanimavaiSGlupo' (don't use splitting and concatination)

const splitString = 'Mnogo mi se pie voda';
// 1. Create an array that looks like this: ['Mnogo','mi','se','pie','voda'];
// 2. Substitute the word 'voda' with whatever you want :D and display the new string;

// --------------- Classes ------------------ //
// Will add new tasks here shortly
