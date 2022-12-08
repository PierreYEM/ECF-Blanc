const api = 'https://pokeapi.co/api/v2/pokemon/';
let bloc = document.querySelector('.bloc'),
    modal = document.querySelector('.modal'),
    modalPkm = document.querySelector('.modalPkm'),
    modalImg = document.querySelector('#modalImg'),
    arrow = document.querySelector('.arrow'),
    modalNb = document.querySelector('.modalNb'),
    modalDetail = document.querySelector('.detail');


for (let i = 0; i < 151; i++) {

    fetch(api + [i + 1] + '/')
        .then(data => data.json())
        .then(json => {
            createBloc();
            console.log(json);
            let tabImage = [...document.querySelectorAll('.pkmimg')],
                tabName = [...document.querySelectorAll('.name')],
                tabPokemon = [...document.querySelectorAll('.pokemon')],
                tabNumber = [...document.querySelectorAll('.number')];

            tabImage[i].style.backgroundImage = "url(" + json.sprites.front_default + ")";
            tabName[i].innerHTML = json.name;
            tabNumber[i].innerHTML = `#${json.id.toString().padStart(3, 0)}`;

            // déclencheur au click

            tabPokemon[i].addEventListener('click', () => {

                modalDetail.innerHTML = '<img src="' + json.sprites.other["official-artwork"].front_default + '">'

                modalPkm.innerHTML = json.name;

                modalNb.innerHTML = `#${json.id.toString().padStart(3, 0)}`;

                modal.classList.toggle('modalOn');


            });
            arrow.addEventListener('click', () => {
                modal.classList.toggle('modalOn');
            })


        })
}
function createBloc() {
    let pokemon = document.createElement('div'),
        pkmimg = document.createElement('div'),
        name = document.createElement('div'),
        number = document.createElement('div');
    pokemon.classList.add('pokemon');
    pkmimg.classList.add('pkmimg');
    name.classList.add('name');
    number.classList.add('number');
    bloc.appendChild(pokemon);
    pkmimg.appendChild(number);
    pokemon.appendChild(pkmimg);
    pokemon.appendChild(name);
}
function createModal() {

}