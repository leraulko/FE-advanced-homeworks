const getCharactersButton = document.getElementById('characters');
const getPlanetsButton = document.getElementById('planets');
let movieNum = document.getElementById('input');
let planetsUrl = 'https://swapi.dev/api/planets/';


getCharactersButton.onclick = getCharacters;
getPlanetsButton.onclick = getPlanets;


function createDiv(className) {
    let div = document.createElement('div');
    document.getElementById('information').append(div);
    div.classList.add(className);

    return div
};

function createButton(className, html) {
    let button = document.createElement('button');
    document.getElementById('information').append(button);
    button.classList.add(className);
    button.innerHTML = html;

    return button
};


async function getCharacters() {
    try {
        document.getElementById('information').innerHTML = ' <p id = "loading"> Please, wait... </p> ';
        const requestCharacters = await fetch(`https://swapi.dev/api/films/${movieNum.value}`, {
            method: 'GET',
        });
        const responseCharacters = await requestCharacters.json();
        let charactersPromise = [];
        let charactersJSON = [];

        for (let i = 0; i < responseCharacters.characters.length; i++) {
            charactersPromise[i] = await fetch(responseCharacters.characters[i]);
            charactersJSON[i] = await charactersPromise[i].json();
        }
        displayCharactersInfo(charactersJSON);

    } catch (error) {
        alert(error);
    };
};

function displayCharactersInfo(arr) {
    document.getElementById('information').innerHTML = '';
    arr.forEach(el => {
        if (el.gender.toLowerCase() == 'female') {
            el.gender = '♀';
        } else if (el.gender.toLowerCase() == 'male') {
            el.gender = '♂';
        } else {
            el.gender = '🤖';
        }

        createDiv('characterInfo').innerHTML = el.name + ', ' + el.birth_year + ', ' + el.gender;
    });
};


async function getPlanets() {
    try {
        document.getElementById('information').innerHTML = ' <p id = "loading"> Please, wait... </p> ';
        const requestPlanets = await fetch(planetsUrl, {
            method: 'GET',
        });
        const responsePlanets = await requestPlanets.json();
        displayPlanets(responsePlanets.results);


        let prevButton = createButton('navigation_btn', 'previous');
        let nextButton = createButton('navigation_btn', 'next');


        if (!responsePlanets.previous) {
            prevButton.style.display = 'none';
        } else {
            prevButton.addEventListener('click', () => {
                planetsUrl = responsePlanets.previous;
                getPlanets();
            });
        };

        if(!responsePlanets.next) {
            nextButton.style.display = 'none';
        } else {
            nextButton.addEventListener('click', () => {
                planetsUrl = responsePlanets.next;
                getPlanets();
            });
        };

    } catch (error) {
        alert(error);
    };
};

function displayPlanets(arr) {
    document.getElementById('information').innerHTML = '';
    arr.forEach(el => {
        createDiv('planet').innerHTML = el.name;
    });
};