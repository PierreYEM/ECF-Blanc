const api = 'https://pokeapi.co/api/v2/pokemon/',
    api2 = 'https://pokeapi.co/api/v2/pokemon-species/',
    listNumber = 151;


///Déclaration des variables de la modale
let body = document.querySelector('body'),
    bloc = document.querySelector('.blocList'),
    modal = document.querySelector('.modal'),
    modalCard = document.querySelector('.modalCard'),
    modalPkmName = document.querySelector('.modalPkmName'),
    modalImg = document.querySelector('#modalImg'),
    arrow = document.querySelector('span'),
    modalNb = document.querySelector('.modalNb'),
    modalDetail = document.querySelector('.detail'),
    modalPkmImg = document.querySelector('.modalPkmImg'),
    pkm3d = document.querySelector('.pkm3d');


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
    tabFinal = new Array,
    wallpaper = [...document.querySelectorAll('.wallpaper')];

///création des 151 blocs sans passer par le HTML et déclaration des tableaux
createBlocList();

///déclaration des tableaux pour l'index
var tabImage = [...document.querySelectorAll('.pkmimg')],
    tabName = [...document.querySelectorAll('.name')],
    tabPokemon = [...document.querySelectorAll('.pokemon')],
    tabNumber = [...document.querySelectorAll('.number')];


getPkm();



async function getPkm() {

    for (let i = 0; i < listNumber; i++) {

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
        ///fusion des objets JSON///
        tabFinal[i] = { ...tabPkm[i], ...tabDescription[i] }
console.log(tabFinal[1]);


        ///Images des pokemon de l'index
        tabImage[i].innerHTML = '<img src="' + tabFinal[i].sprites.front_default + '"alt="pokemon">';

        /// ajouter les couleurs de type dans l'index
        ColorTypeIndex(tabFinal[i].types[0].type.name, i)


        ///numéro des pokémon de l'index à 3 chiffres
        tabNumber[i].innerHTML = `#${tabFinal[i].id.toString().padStart(3, 0)}`;


        ///Obtenir les noms francais sur l'index ///
        let Pname = tabFinal[i].names[4].name;
        tabName[i].innerHTML = Pname.slice(0, 1).toUpperCase() + Pname.slice(1, Pname.length);


        /// Fenêtre modale

        tabPokemon[i].addEventListener('click', () => {

            ///désactiver la barre de scroll durant la modale
            body.classList.toggle('scrollOnOff');


            ///Obtenir les noms francais sur la modale ///
            modalPkmName.innerHTML = Pname.slice(0, 1).toUpperCase() + Pname.slice(1, Pname.length);

            ///Image du pokemon dans la fenêtre modale
            modalPkmImg.innerHTML = '<img src="' + tabFinal[i].sprites.other["official-artwork"].front_default + '"alt="pokemon ' + modalPkmName.innerHTML + '">';

           console.log(modalPkmImg.innerHTML.img);

            ///numéro de pokémon à 3 chiffres
            modalNb.innerHTML = `#${tabFinal[i].id.toString().padStart(3, 0)}`;

            ///classe pour slide/afficher la modale
            modal.classList.toggle('modalOn');
            setTimeout(() => modal.classList.toggle('overlay'), 1000);


            if (window.screen.width > 435) {
                pkm3d.classList.toggle('pkm3dOn');
                pkm3d.innerHTML = `<img src=${tabFinal[i].sprites.other.home.front_default}> `;
            }



            modal.setAttribute('aria-hidden', 'false');

            /// spécifités About du pokemon
            ability1.innerHTML = tabFinal[i].abilities[0].ability.name;

            ///gestion d'erreur  ability2= undefined
            try { ability2.innerHTML = tabFinal[i].abilities[1].ability.name; }
            catch (undefined) { ability2.innerHTML = "" }

            ///statistiques du pokémon///
            heightValue.innerHTML = tabFinal[i].height / 10 + "m";
            weightValue.innerHTML = tabFinal[i].weight / 10 + "kg";

            ///Valeurs des stats
            hp.innerHTML = tabFinal[i].stats[0].base_stat;
            atk.innerHTML = tabFinal[i].stats[1].base_stat;
            def.innerHTML = tabFinal[i].stats[2].base_stat;
            satk.innerHTML = tabFinal[i].stats[3].base_stat;
            sdef.innerHTML = tabFinal[i].stats[4].base_stat;
            spd.innerHTML = tabFinal[i].stats[5].base_stat;

            ///type de pokemon
            type1.innerHTML = tabFinal[i].types[0].type.name;
            FrenchType1(type1.innerHTML, i);


            ///cache le second type si inexistant///
            if (tabFinal[i].types.length < 2) {
                type2.classList.add('display')
            }
            else {
                type2.classList.remove('display');
                type2.innerHTML = tabFinal[i].types[1].type.name;
            }

            FrenchType2(type2.innerHTML, i);



            ///barre stat progressive qui démarre après 1s
            setTimeout(() => {
                statBarHp.style.width = tabFinal[i].stats[0].base_stat * 100 / 255 + '%';
                statBarAtk.style.width = tabFinal[i].stats[1].base_stat * 100 / 255 + '%';
                statBarDef.style.width = tabFinal[i].stats[2].base_stat * 100 / 255 + '%';
                statBarSatk.style.width = tabFinal[i].stats[3].base_stat * 100 / 255 + '%';
                statBarSdef.style.width = tabFinal[i].stats[4].base_stat * 100 / 255 + '%';
                statBarSpd.style.width = tabFinal[i].stats[5].base_stat * 100 / 255 + '%';


                ///progress barre animée par stat
                statBarHp.style.cssText = 'width:' + tabFinal[i].stats[0].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                statBarHp.classList.add('.progressBar');


                statBarAtk.style.cssText = 'width:' + tabFinal[i].stats[1].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                statBarAtk.classList.add('.progressBar');

                statBarDef.style.cssText = 'width:' + tabFinal[i].stats[2].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                statBarDef.classList.add('.progressBar');

                statBarSatk.style.cssText = 'width:' + tabFinal[i].stats[3].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                statBarSatk.classList.add('.progressBar');

                statBarSdef.style.cssText = 'width:' + tabFinal[i].stats[4].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                statBarSdef.classList.add('.progressBar');

                statBarSpd.style.cssText = 'width:' + tabFinal[i].stats[5].base_stat * 100 / 255 + "%;;background-color: #666666\;\
                transition: 1.5s;'";
                statBarSpd.classList.add('.progressBar');
            }, 800);


            /// obtenir les descriptifs en francais
            description.innerHTML = tabFinal[i].flavor_text_entries[24].flavor_text;




        })

        ///bouton retour de modal
        arrow.addEventListener('click', () => {
            if (window.screen.width > 435) {
                pkm3d.classList.toggle('pkm3dOn');
            }
            modal.classList.toggle('overlay');


            modal.classList.toggle('modalOn');
            modal.setAttribute('aria-hidden', 'true');
            body.classList.toggle('scrollOnOff');



            statBarHp.style.width = 0;
            statBarAtk.style.width = 0;
            statBarDef.style.width = 0;
            statBarSatk.style.width = 0;
            statBarSdef.style.width = 0;
            statBarSpd.style.width = 0;
        })
        /*modal.addEventListener('touchmove', () => {
            modal.classList.toggle('overlay');


            modal.classList.toggle('modalOn');
            modal.setAttribute('aria-hidden', 'true');
            body.classList.toggle('scrollOnOff');



            statBarHp.style.width = 0;
            statBarAtk.style.width = 0;
            statBarDef.style.width = 0;
            statBarSatk.style.width = 0;
            statBarSdef.style.width = 0;
            statBarSpd.style.width = 0;
        }) */

    }
    console.log(tabPkm);
    console.log(tabDescription);
    console.log(tabFinal);


    for (let i = 0; i < wallpaper.length; i++) {

        wallpaper[i].style.animationDelay = `${random(3, 8)}s`,
            wallpaper[i].style.animation = `animate ${random(2, 4)}s infinite linear`,
            wallpaper[i].style.top = `${random(1, 100)}vh`;
        wallpaper[i].style.left = 0;


    };

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

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
