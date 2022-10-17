export const getCharactersButton = document.getElementById('characters');
export const getPlanetsButton = document.getElementById('planets');
let movieNum = document.getElementById('input');
let planetsUrl = 'https://swapi.dev/api/planets/';


// getCharactersButton.onclick = getCharacters;
// getPlanetsButton.onclick = getPlanets;


function createDiv(className) {
    let div = document.createElement('div');
    document.querySelector('#information').append(div);
    div.classList.add(className);

    return div
};

function createButton(className, html) {
    let button = document.createElement('button');
    document.querySelector('#information').append(button);
    button.classList.add(className);
    button.innerHTML = html;

    return button
};


export async function getCharacters() {
    try {
        document.querySelector('#information').innerHTML = ' <p id = "loading"> Please, wait... </p> ';
        let requestCharacters = await fetch(`https://swapi.dev/api/films/${movieNum.value}`, {
            method: 'GET',
        });
        let responseCharacters = await requestCharacters.json();
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
    document.querySelector('#information').innerHTML = '';
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


export async function getPlanets() {
    try {
        document.querySelector('#information').innerHTML = ' <p id = "loading"> Please, wait... </p> ';
        let requestPlanets = await fetch(planetsUrl, {
            method: 'GET',
        });
        let responsePlanets = await requestPlanets.json();
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
    document.querySelector('#information').innerHTML = '';
    arr.forEach(el => {
        createDiv('planet').innerHTML = el.name;
    });
};