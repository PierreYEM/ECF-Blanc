const api="https://pokeapi.co/api/v2/pokemon/1";

let image =  "";
let pokemon = document.createElement('div'),
    pkmimg = document.createElement('div'),
    name = document.createElement('div'),
    bloc = document.querySelector('.blocList'),
    number = document.createElement('div');



createBlocList();

// for (let i = 0; i < 151; i++) {


    const json =fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then(data => data.json())
        .then(await (data => {image=data}));
        console.log(image);










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
