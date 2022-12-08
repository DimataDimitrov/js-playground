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




















