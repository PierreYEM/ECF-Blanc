let image = [];
let pokemon = document.createElement('div'),
    pkmimg = document.createElement('div'),
    name = document.createElement('div'),
    bloc = document.querySelector('.blocList'),
    number = document.createElement('div');



createBlocList();
let tabImage = [...document.querySelectorAll('.pkmimg')];

for (let i = 0; i < 151; i++) {

    fetch("https://pokeapi.co/api/v2/pokemon/" + [i + 1] + '/')
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            image.push(data.sprites.front_default);
console.log(image[5]);
        })



}
console.log("test",image);
console.log('test2',image[0]);



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
flavor_text_entries

flavor_text_entries[0].language.name