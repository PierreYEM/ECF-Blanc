const api = "https://pokeapi.co/api/v2/pokemon/";


let pokemon = document.createElement('div'),
    pkmimg = document.createElement('div'),
    name = document.createElement('div'),
    bloc = document.querySelector('.blocList'),
    number = document.createElement('div'),
    pkm=[];
var
    tabName = [...document.querySelectorAll('.name')],
    tabPokemon = [...document.querySelectorAll('.pokemon')],
    tabNumber = [...document.querySelectorAll('.number')];


createBlocList();

getAllPkm(pkm);


async function getAllPkm(tab) {

    for (let i = 0; i < 151; i++) {
        tab[i] = await fetch(api + [i + 1] + '/')
            .then(data => data.json());

    }
console.log(tab);


}





function createBlocList() {
    for (let i = 0; i < 151; i++) {
        let pokemon = document.createElement('div'),
            pkmimg = document.createElement('div'),
            name = document.createElement('div'),
            bloc = document.querySelector('.blocList'),
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
