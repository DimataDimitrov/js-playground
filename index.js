// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const myPets = ['Andreea', 'Makso', 'Mitko'];

//Find and make  line in html for all pets starting  with letter M
console.log(myPets.filter((el) => el.startsWith('M')));
