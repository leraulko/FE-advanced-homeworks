import "../styles/style.css";
import "../styles/hw9.css";
import "../styles/hw10.css";
import "../styles/hw12.css";
import "../styles/hw13.css";
import animals_jpeg from "../assets/animals.jpeg"
import background_png from "../assets/background.png"

import { isPalindrom } from "./hw3";
import { pairs } from "./hw4";
import { filterEvenNumbers } from "./hw5";
import { students, getSubjects } from "./hw6";
import { ukraine, getMyTaxes } from "./hw7";
import { student1 } from "./hw8";
import { generateBlocksInterval } from "./hw9";
import { 
    
 } from "./hw10";
import { getRandomChinese } from "./hw11";
import { getCharacters, getCharactersButton, getPlanets, getPlanetsButton } from "./hw12";
import { fontGenerator } from "./hw13";


console.log(isPalindrom('SaippuAki vikauPpias'));

console.log(pairs);

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

console.log(getSubjects(students[0]));

console.log(getMyTaxes.call(ukraine, 1500));

console.log(student1);

getRandomChinese(4).then(res => console.log(res));

generateBlocksInterval(document.body.querySelector('.content1'));

document.body.querySelector('.content2').style.background = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${animals_jpeg}') no-repeat center`;


document.body.querySelector('.content3').style.background = `url('${background_png}') no-repeat center top`;
getCharactersButton.onclick = getCharacters;
getPlanetsButton.onclick = getPlanets;

fontGenerator.next();