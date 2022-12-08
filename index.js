// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const myPets = ['Andreea', 'Makso', 'Mitko'];
const  reversedpets = (myPets.reverse());
console.log(reversedpets)

// //Find and make  line in html for all pets starting  with letter M
// console.log(myPets.filter((el) => el.startsWith('M')));
// console.log(myPets.filter(element => element.includes("a")));
// console.log(myPets.reverse());

console.log(reversedpets[0])

const ordered = [reversedpets[0],reversedpets[2],reversedpets[1]];
console.log(ordered) 





const orderedsmile = [reversedpets[0] + " :)",reversedpets[2] + " :)",reversedpets[1] + " :)"];
const smileorrder = ordered.map(el => el + ' :)');

console.log(orderedsmile)
console.log(smileorrder)

const kek = "\"Krek\"";
console.log(kek)




const numArr = [11,52,35,49,5,26,117];
// 1. Find the biggest number in the array
// 2. Find the smallest number in the array
// 3. Find the sum of all numbers in the array
// 4. Order the numbers in ascending order
// 5. Order the numbers in descending order
// 6. Find the sum of all two digit numbers
// 7. Find all numbers which are even


const person1 = {
  name: 'Asen',
  age: 25,
  job: 'Markuch',
  city: 'Sofia',
  pets: ['Dog', 'Cat', 'Cow']
}

// 1. Console log the name of the object
// 2. Console log all pets starting with C
// 3. Console.log all pets containing O

const person2 = {
  name: 'Ceco',
  age: 33,
  job: 'Kenev',
  city: 'Peshtera',
  pets: ['Cow', 'Horse', 'Tiger', 'Cat']
}

// 1. Find which person is older and console log his name
// 2. Find all pets which are the same for both people
// 3. Create an array with both people and order it by their name
// 4. Create an array with both people and order it by the number of animals they have
// 5. Add a last name to person1 and console log new the new object
// 6. Remove the job from person1
// 7. Change the name of person1
// 8. Display person1 inforrmation in HTML

const duplicates = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7];
// 1. Remove the duplicates from the list
// 2. Count how many occurances of each number there are (Example: [{1: 3}, {2: 2}, {3: 5} ...])
// 3. Find the sum of all unique numbers
// 4. Find all numbers that occur only once
















