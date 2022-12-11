const api = 'https://pokeapi.co/api/v2/pokemon/',
    api2 = 'https://pokeapi.co/api/v2/pokemon-species/',
    listNumber = 151;

///Déclaration des variables de la modale
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

///création des 151 blocs sans passer par le HTML et déclaration des tableaux
createBlocList();

///déclaration des tableaux pour l'index
var tabImage = [...document.querySelectorAll('.pkmimg')],
    tabName = [...document.querySelectorAll('.name')],
    tabPokemon = [...document.querySelectorAll('.pokemon')],
    tabNumber = [...document.querySelectorAll('.number')],


///Indexation des pokemon
for (let i = 0; i < listNumber; i++) {

    fetch(api + [i + 1] + '/')
        .then(data => data.json())
        .then(json => {

            console.log(json);

            /// ajouter les couleurs de type dans l'index
            ColorTypeIndex(json.types[0].type.name, i)

            ///la variable id sert de lien entre l'index et la modale
            let id = json.id;

            ///Images des pokemon de l'index
            tabImage[i].innerHTML = '<img src="' + json.sprites.front_default + '"alt="pokemon">';

            ///numéro des pokémon de l'index à 3 chiffres
            tabNumber[i].innerHTML = `#${json.id.toString().padStart(3, 0)}`;

            ///Obtenir les noms francais sur l'index sans passer par le compteur initial
            fetch(api2 + [i + 1] + '/')
                .then(data => data.json())
                .then(data => {
                    let name = data.names[4].name;
                    tabName[i].innerHTML = data.names[4].name.slice(0, 1).toUpperCase() + data.names[4].name.slice(1, data.names[4].name.length);
                    modalPkmName.innerHTML = data.names[4].name.slice(0, 1).toUpperCase() + data.names[4].name.slice(1, data.names[4].name.length)
                })

            /// Fenêtre modale
            tabPokemon[i].addEventListener('click', () => {


                ///Obtenir le nom du pokemon en francais dans la modale
                fetch(api2 + [i + 1] + '/')
                    .then(data => data.json())
                    .then(data => {
                        let name = data.names[4].name;

                        ///Première lettre du pokémon en majuscule
                        modalPkmName.innerHTML = data.names[4].name.slice(0, 1).toUpperCase() + data.names[4].name.slice(1, data.names[4].name.length)
                    })

                ///Image du pokemon dans la fenêtre modale
                modalPkmImg.innerHTML = '<img src="' + json.sprites.other["official-artwork"].front_default + '"alt="pokemon ' + modalPkmName.innerHTML + '">';

                ///numéro de pokémon à 3 chiffres
                modalNb.innerHTML = `#${json.id.toString().padStart(3, 0)}`;

                ///classe pour slide/afficher la modale
                modal.classList.toggle('modalOn');

                /// spécifités About du pokemon
                ability1.innerHTML = json.abilities[0].ability.name;
                try { ability2.innerHTML = json.abilities[1].ability.name; }
                catch (undefined) { ability2.parentNode.removeChild(ability2) }

                
                heightValue.innerHTML = json.height / 10 + "m";
                weightValue.innerHTML = json.weight + "kg";

                ///Valeurs des stats
                hp.innerHTML = json.stats[0].base_stat;
                atk.innerHTML = json.stats[1].base_stat;
                def.innerHTML = json.stats[2].base_stat;
                satk.innerHTML = json.stats[3].base_stat;
                sdef.innerHTML = json.stats[4].base_stat;
                spd.innerHTML = json.stats[5].base_stat;

                ///type de pokemon
                type1.innerHTML = json.types[0].type.name;
                FrenchType(type1.innerHTML, i);
                try { type2.innerHTML = json.types[1].type.name; }
                catch (undefined) { type2.parentNode.removeChild(type2) }

                // type2.innerHTML = "none"





                ///barre stat progressive qui démarre après 1s
                setTimeout(() => {
                    statBarHp.style.width = json.stats[0].base_stat * 100 / 255 + '%';
                    statBarAtk.style.width = json.stats[1].base_stat * 100 / 255 + '%';
                    statBarDef.style.width = json.stats[2].base_stat * 100 / 255 + '%';
                    statBarSatk.style.width = json.stats[3].base_stat * 100 / 255 + '%';
                    statBarSdef.style.width = json.stats[4].base_stat * 100 / 255 + '%';
                    statBarSpd.style.width = json.stats[5].base_stat * 100 / 255 + '%';


                    ///progress barre animée par stat
                    statBarHp.style.cssText = 'width:' + json.stats[0].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                    statBarHp.classList.add('.progressBar');


                    statBarAtk.style.cssText = 'width:' + json.stats[1].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                    statBarAtk.classList.add('.progressBar');

                    statBarDef.style.cssText = 'width:' + json.stats[2].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                    statBarDef.classList.add('.progressBar');

                    statBarSatk.style.cssText = 'width:' + json.stats[3].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                    statBarSatk.classList.add('.progressBar');

                    statBarSdef.style.cssText = 'width:' + json.stats[4].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                    statBarSdef.classList.add('.progressBar');

                    statBarSpd.style.cssText = 'width:' + json.stats[5].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                    statBarSpd.classList.add('.progressBar');
                }, 1000);



                /// obtenir les descriptifs en francais
                fetch(api2 + id + '/')
                    .then(data => data.json())
                    .then(json2 => {
                        let tab = json2;
                        console.log(tab);
                        description.innerHTML = json2.flavor_text_entries[24].flavor_text;

                    })







            });






            ///bouton retour de modal
            arrow.addEventListener('click', () => {
                modal.classList.toggle('modalOn');

            })



        });



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
function FrenchType(element, compteur) {
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


