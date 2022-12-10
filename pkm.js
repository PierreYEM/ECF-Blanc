const api = 'https://pokeapi.co/api/v2/pokemon/',
    listNumber = 1;
let bloc = document.querySelector('.blocList'),
    modal = document.querySelector('.modal'),
    modalPkmName = document.querySelector('.modalPkmName'),
    modalImg = document.querySelector('#modalImg'),
    arrow = document.querySelector('span'),
    modalNb = document.querySelector('.modalNb'),
    modalDetail = document.querySelector('.detail'),
    modalPkmImg = document.querySelector('.modalPkmImg');

let type1 = document.querySelector(".type1"),
    type2 = document.querySelector(".type2")

let hp = document.querySelector('.hp'),
    atk = document.querySelector('.atk'),
    def = document.querySelector('.def'),
    satk = document.querySelector('.satk'),
    sdef = document.querySelector('.sdef'),
    spd = document.querySelector('.spd');



createBlocList();

var tabImage = [...document.querySelectorAll('.pkmimg')],
    tabName = [...document.querySelectorAll('.name')],
    tabPokemon = [...document.querySelectorAll('.pokemon')],
    tabNumber = [...document.querySelectorAll('.number')];

for (let i = 0; i < listNumber; i++) {

    fetch(api + [i + 1] + '/')
        .then(data => data.json())
        .then(json => {

            console.log(json);

            tabImage[i].innerHTML = '<img src="' + json.sprites.front_default + '">';
            // tabName[i].innerHTML = json.name.slice(0, 1).toUpperCase() + json.name.slice(1, json.name.length);
            tabNumber[i].innerHTML = `#${json.id.toString().padStart(3, 0)}`;

            // déclencheur au click

            tabPokemon[i].addEventListener('click', () => {

                modalPkmImg.innerHTML = '<img src="' + json.sprites.other["official-artwork"].front_default + '">'

                modalPkmName.innerHTML = json.name.slice(0, 1).toUpperCase() + json.name.slice(1, json.name.length);

                modalNb.innerHTML = `#${json.id.toString().padStart(3, 0)}`;

                modal.classList.toggle('modalOn');



                hp.innerHTML = json.stats[0].base_stat;
                atk.innerHTML = json.stats[1].base_stat;
                def.innerHTML = json.stats[2].base_stat;
                satk.innerHTML = json.stats[3].base_stat;
                sdef.innerHTML = json.stats[4].base_stat;
                spd.innerHTML = json.stats[5].base_stat;

                type1.innerHTML = json.types[0].type.name;
                type2.innerHTML = json.types[1].type.name;

            });
            arrow.addEventListener('click', () => {
                modal.classList.toggle('modalOn');
            })



        });
    fetch('https://pokeapi.co/api/v2/pokemon-species/' + [i + 1] + '/')
        .then(data => data.json())
        .then(a => {
            let name = a.names[4].name;
            tabName[i].innerHTML = a.names[4].name.slice(0, 1).toUpperCase() + a.names[4].name.slice(1, a.names[4].name.length);

        })
}
// let a = fetch('"https://pokeapi.co/api/v2/pokemon-species/'+ [i + 1] +'/"')
//     .then(data => data.json())
//     .then(a => console.log(a))





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
function getNameStats() {
    var hp = document.querySelector('.hp'),
        atk = document.querySelector('.atk'),
        def = document.querySelector('.def'),
        satk = document.querySelector('.satk'),
        sdef = document.querySelector('.sdef'),
        spd = document.querySelector('.spd');

    hp.innerHTML = json.stats[0].stat.name;
}

function statVar() {
    let hp = document.querySelector('.hp'),
        atk = document.querySelector('.atk'),
        def = document.querySelector('.def'),
        satk = document.querySelector('.satk'),
        sdef = document.querySelector('.sdef'),
        spd = document.querySelector('.spd');
}

