const api = 'https://pokeapi.co/api/v2/pokemon/';
let tabImage = [...document.querySelectorAll('.pkmimg')],
    tabName = [...document.querySelectorAll('.name')],
    tabPokemon = [...document.querySelectorAll('.pokemon')],
    tabNumber = [...document.querySelectorAll('.number')],
    tabModalImg = [...document.querySelectorAll('#modalImg')],




    modal = document.querySelector('.modal'),
    modalPkm = document.querySelector('.modalPkm'),
    modalImg = document.querySelector('#modalImg'),
    arrow = document.querySelector('.arrow'),
    modalNb = document.querySelector('.modalNb');



for (let i = 0; i < tabImage.length; i++) {

    fetch(api + [i + 1] + '/')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            tabImage[i].style.backgroundImage = "url(" + json.sprites.front_default + ")";

            tabName[i].innerHTML = json.name;

            tabNumber[i].innerHTML = `#${json.id.toString().padStart(3, 0)}`;

            // déclencheur au click

            tabPokemon[i].addEventListener('click', () => {

                modalImg.innerHTML = '<img src="' + json.sprites.front_default + '">'


                modalPkm.innerHTML = json.name;

                modalNb.innerHTML = `#${json.id.toString().padStart(3, 0)}`;

                modal.classList.toggle('modalOn');


            });
            arrow.addEventListener('click', () => {
                modal.classList.toggle('modalOn');
            })


        })
}
