const api = 'https://pokeapi.co/api/v2/pokemon/',
    api2 = 'https://pokeapi.co/api/v2/pokemon-species/',
    listNumber = 151;


///Déclaration des variables de la modale
let body = document.querySelector('body'),
    bloc = document.querySelector('.blocList'),
    modal = document.querySelector('.modal'),
    modalPkmName = document.querySelector('.modalPkmName'),
    modalImg = document.querySelector('#modalImg'),
    arrow = document.querySelector('span'),
    modalNb = document.querySelector('.modalNb'),
    modalDetail = document.querySelector('.detail'),
    modalPkmImg = document.querySelector('.modalPkmImg');

let type1 = document.querySelector(".type1"),
    type2 = document.querySelector(".type2"),
    typeChild = document.querySelector('.typeChild');


///variables de stats
let hp = document.querySelector('.hp'),
    atk = document.querySelector('.atk'),
    def = document.querySelector('.def'),
    satk = document.querySelector('.satk'),
    sdef = document.querySelector('.sdef'),
    spd = document.querySelector('.spd'),
    statBarHp = document.querySelector('.statBarHp'),
    statBarAtk = document.querySelector('.statBarAtk'),
    statBarDef = document.querySelector('.statBarDef'),
    statBarSatk = document.querySelector('.statBarSatk'),
    statBarSdef = document.querySelector('.statBarSdef'),
    statBarSpd = document.querySelector('.statBarSpd');

let description = document.querySelector('.descriptionText'),
    weightValue = document.querySelector('.weightValue'),
    heightValue = document.querySelector('.heightValue'),
    ability1 = document.querySelector('.ability1'),
    ability2 = document.querySelector('.ability2');




let tabPkm = new Array,
    tabDescription = new Array,
    tabFinal = new Array;

///création des 151 blocs sans passer par le HTML et déclaration des tableaux
createBlocList();

///déclaration des tableaux pour l'index
var tabImage = [...document.querySelectorAll('.pkmimg')],
    tabName = [...document.querySelectorAll('.name')],
    tabPokemon = [...document.querySelectorAll('.pokemon')],
    tabNumber = [...document.querySelectorAll('.number')];



getPkm();

async function getPkm() {

    for (let i = 0; i < 150; i++) {

        await fetch(api + [i + 1] + '/')
            .then(data => data.json())
            .then(data => {
                tabPkm.push(data)

            })

        await fetch(api2 + [i + 1] + '/')
            .then(data => data.json())
            .then(data => {
                tabDescription.push(data)

            })

        tabFinal[i] = { ...tabPkm[i], ...tabDescription[i] }



    }
    console.log(tabPkm);
    console.log(tabDescription);
    console.log(tabFinal);
























}



///créer des blocs pokémon
function createBlocList() {
    for (let i = 0; i < listNumber; i++) {
        let pokemon = document.createElement('div'),
            pkmimg = document.createElement('div'),
            name = document.createElement('div'),
            number = document.createElement('div');

        bloc.appendChild(pokemon);
        pokemon.appendChild(number);
        pokemon.appendChild(pkmimg);
        pokemon.appendChild(name);

        pokemon.classList.add('pokemon');
        pkmimg.classList.add('pkmimg');
        name.classList.add('name');
        number.classList.add('number');

        pokemon.setAttribute('data-id', i + 1)
    }
}
///mettre des couleurs de types dans l'index
function ColorTypeIndex(element, compteur) {
    switch (element) {

        case "water":
            tabName[compteur].style.backgroundColor = "#6493EB";
            break;
        case "fire":
            tabName[compteur].style.backgroundColor = "#F57D31";
            break;
        case "grass":
            tabName[compteur].style.backgroundColor = "#74CB48";
            break;
        case "fighting":
            tabName[compteur].style.backgroundColor = "#C12239";
            break;
        case "flying":
            tabName[compteur].style.backgroundColor = "#A891EC";
            break;
        case "steel":
            tabName[compteur].style.backgroundColor = "#B7B9D0";
            break;
        case "psychic":
            tabName[compteur].style.backgroundColor = "#FB5584";
            break;
        case "rock":
            tabName[compteur].style.backgroundColor = "#B69E31";
            break;
        case "fairy":
            tabName[compteur].style.backgroundColor = "#E69EAC";
            break;
        case "ground":
            tabName[compteur].style.backgroundColor = "#DEC16B";
            break;
        case "ghost":
            tabName[compteur].style.backgroundColor = "#70559B";
            break;
        case "ice":
            tabName[compteur].style.backgroundColor = "#9AD6DF";
            break;
        case "dark":
            tabName[compteur].style.backgroundColor = "#75574C";
            break;
        case "bug":
            tabName[compteur].style.backgroundColor = "#A7B723";
            break;
        case "normal":
            tabName[compteur].style.backgroundColor = "#AAA67F";
            break;
        case "dragon":
            tabName[compteur].style.backgroundColor = "#7037FF";
            break;
        case "electric":
            tabName[compteur].style.backgroundColor = "#F9CF30";
            break;
        case "poison":
            tabName[compteur].style.backgroundColor = "#A43E9E";
            break;

    }
}

///Traduction des types et ajout des couleurs associées dans la modale
function FrenchType1(element, compteur) {
    switch (element) {

        case "water":
            type1.innerHTML = "eau";
            type1.style.backgroundColor = "#6493EB";
            tabName[compteur].style.backgroundColor = "#6493EB";
            break;
        case "fire":
            type1.innerHTML = "feu";
            type1.style.backgroundColor = "#F57D31";
            tabName[compteur].style.backgroundColor = "#F57D31";
            break;
        case "grass":
            type1.innerHTML = "plante";
            type1.style.backgroundColor = "#74CB48";
            tabName[compteur].style.backgroundColor = "#74CB48";
            break;
        case "fighting":
            type1.innerHTML = "combat";
            type1.style.backgroundColor = "#C12239";
            tabName[compteur].style.backgroundColor = "#C12239";
            break;
        case "flying":
            type1.innerHTML = "vol";
            type1.style.backgroundColor = "#A891EC";
            tabName[compteur].style.backgroundColor = "#A891EC";
            break;
        case "steel":
            type1.innerHTML = "acier";
            type1.style.backgroundColor = "#B7B9D0";
            tabName[compteur].style.backgroundColor = "#B7B9D0";
            break;
        case "psychic":
            type1.innerHTML = "psy";
            type1.style.backgroundColor = "#FB5584";
            tabName[compteur].style.backgroundColor = "#FB5584";
            break;
        case "rock":
            type1.innerHTML = "roche";
            type1.style.backgroundColor = "#B69E31";
            tabName[compteur].style.backgroundColor = "#B69E31";
            break;
        case "fairy":
            type1.innerHTML = "fée";
            type1.style.backgroundColor = "#E69EAC";
            tabName[compteur].style.backgroundColor = "#E69EAC";
            break;
        case "ground":
            type1.innerHTML = "sol";
            type1.style.backgroundColor = "#DEC16B";
            tabName[compteur].style.backgroundColor = "#DEC16B";
            break;
        case "ghost":
            type1.innerHTML = "spectre";
            type1.style.backgroundColor = "#70559B";
            tabName[compteur].style.backgroundColor = "#70559B";
            break;
        case "ice":
            type1.innerHTML = "glace";
            type1.style.backgroundColor = "#9AD6DF";
            tabName[compteur].style.backgroundColor = "#9AD6DF";
            break;
        case "dark":
            type1.innerHTML = "ténèbre";
            type1.style.backgroundColor = "#75574C";
            tabName[compteur].style.backgroundColor = "#75574C";
            break;
        case "bug":
            type1.innerHTML = "insecte";
            type1.style.backgroundColor = "#A7B723";
            tabName[compteur].style.backgroundColor = "#A7B723";
            break;
        case "normal":
            type1.style.backgroundColor = "#AAA67F";
            tabName[compteur].style.backgroundColor = "#AAA67F";
            break;
        case "dragon":
            type1.style.backgroundColor = "#7037FF";
            tabName[compteur].style.backgroundColor = "#7037FF";
            break;
        case "electric":
            type1.style.backgroundColor = "#F9CF30";
            tabName[compteur].style.backgroundColor = "#F9CF30";
            break;
        case "poison":
            type1.style.backgroundColor = "#A43E9E";
            tabName[compteur].style.backgroundColor = "#A43E9E";
            break;


    }
}

function FrenchType2(element) {
    switch (element) {

        case "aucun":
            type2.style.backgroundColor = "#666666";
            break;
        case "water":
            type2.innerHTML = "eau";
            type2.style.backgroundColor = "#6493EB";
            break;
        case "fire":
            type2.innerHTML = "feu";
            type2.style.backgroundColor = "#F57D31";
            break;
        case "grass":
            type2.innerHTML = "plante";
            type2.style.backgroundColor = "#74CB48";
            break;
        case "fighting":
            type2.innerHTML = "combat";
            type2.style.backgroundColor = "#C12239";
            break;
        case "flying":
            type2.innerHTML = "vol";
            type2.style.backgroundColor = "#A891EC";
            break;
        case "steel":
            type2.innerHTML = "acier";
            type2.style.backgroundColor = "#B7B9D0";
            break;
        case "psychic":
            type2.innerHTML = "psy";
            type2.style.backgroundColor = "#FB5584";
            break;
        case "rock":
            type2.innerHTML = "roche";
            type2.style.backgroundColor = "#B69E31";
            break;
        case "fairy":
            type2.innerHTML = "fée";
            type2.style.backgroundColor = "#E69EAC";
            break;
        case "ground":
            type2.innerHTML = "sol";
            type2.style.backgroundColor = "#DEC16B";
            break;
        case "ghost":
            type2.innerHTML = "spectre";
            type2.style.backgroundColor = "#70559B";
            break;
        case "ice":
            type2.innerHTML = "glace";
            type2.style.backgroundColor = "#9AD6DF";
            break;
        case "dark":
            type2.innerHTML = "ténèbre";
            type2.style.backgroundColor = "#75574C";
            break;
        case "bug":
            type2.innerHTML = "insecte";
            type2.style.backgroundColor = "#A7B723";
            break;
        case "normal":
            type2.style.backgroundColor = "#AAA67F";
            break;
        case "dragon":
            type2.style.backgroundColor = "#7037FF";
            break;
        case "electric":
            type2.style.backgroundColor = "#F9CF30";
            break;
        case "poison":
            type2.style.backgroundColor = "#A43E9E";
            break;


    }
}