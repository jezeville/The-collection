
let sectionHeader = document.querySelector('.title');

let imgProfil = document.createElement('img');
imgProfil.src = "assets/img/photolinkedin.jpg";
imgProfil.classList.add('title__img');

let textHeader = document.createElement('div');
textHeader.className = "title__textHeader";
let h1 = document.createElement('h1');
h1.className = "title__textHeader__h1";
h1.innerHTML = "Frédéric Jérémy's collection "
let pHeader = document.createElement('p');
pHeader.className = "title__textHeader__p";
pHeader.innerHTML = "Découvrez une collection captivante de films qui embrasse la diversité des genres, de l'action palpitante aux drames émotionnels, offrant une expérience cinématographique riche en émotions et en moments inoubliables. Chaque film est soigneusement sélectionné pour offrir un voyage cinématographique varié, allant des classiques intemporels aux œuvres contemporaines, créant ainsi une expérience immersive pour tous les amateurs de cinéma"
let sorted = document.createElement('button');
sorted.className = "title__textHeader__button";
sorted.innerHTML = "Trié par genre";



sectionHeader.appendChild(imgProfil);
sectionHeader.appendChild(textHeader);
textHeader.appendChild(h1);
textHeader.appendChild(pHeader);
textHeader.appendChild(sorted);


let object = [
    { id : 1 ,Film: "Inception", image: "assets/img/inception-photo-1134542.jpg", Genre: "Science-Fiction", Réalisateur: "Christopher Nolan", Synopsis: "Dom Cobb, un voleur expérimenté, est capable d'entrer dans les rêves des autres pour voler leurs secrets les plus précieux. Il se voit offrir une mission impossible : implanter une idée dans l'esprit d'une personne. Le film explore les concepts complexes de la réalité et de la perception." },

    { id : 2, Film: "La La Land", image: "assets/img/la-la-land-1.jpg", Genre: "Comédie musicale", Réalisateur: "Damien Chazelle", Synopsis: "Mia, une aspirante actrice, et Sebastian, un musicien de jazz passionné, tombent amoureux à Los Angeles tout en poursuivant leurs rêves. La La Land est une célébration de l'amour, de la créativité, et des sacrifices nécessaires pour réussir dans l'industrie du divertissement." },

    {id : 3 , Film: " The Shawshank Redemption", image: "assets/img/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_.jpg", Genre: "Drame", Réalisateur: "Frank Darabont", Synopsis: "Andy Dufresne est condamné à tort pour le meurtre de sa femme et de son amant. Incarcéré à Shawshank, il maintient son innocence tout en développant des amitiés improbables. Ce film est une histoire puissante sur la rédemption et la persévérance."},

    {id : 4 , Film: "The Grand Budapest Hotel", image: "assets/img/grand-budapest.jpg", Genre: "Comédie musicale", Réalisateur: "Wes Anderson", Synopsis: "L'histoire se déroule dans un hôtel élégant en Europe entre les deux guerres mondiales. Le concierge de l'hôtel et son protégé sont entraînés dans une série d'aventures loufoques impliquant des vols d'œuvres d'art et des mystères meurtriers."},

    {id : 5 , Film: "Pulp Fiction", image: "assets/img/pulpfiction.jpg", Genre: "Crime", Réalisateur: "Quentin Tarantino", Synopsis: "Pulp Fiction entrelace plusieurs histoires criminelles à Los Angeles, créant une toile complexe de personnages, de dialogues percutants et de situations imprévisibles. Le film est célèbre pour sa structure narrative non linéaire et son style distinctif."},

    { id : 6 , Film: "The Dark Knight", image: "assets/img/batman_02.jpg", Genre: "Super-héros", Réalisateur: "Christopher Nolan", Synopsis: "Batman affronte le Joker, un criminel psychotique cherchant à semer le chaos à Gotham City. The Dark Knight explore les thèmes de la justice, de la moralité, et de l'ordre dans une ville corrompue."},

    {id : 7, Film: "Forrest Gump", image: "assets/img/forrestgump.jpg", Genre: "Drame", Réalisateur: "Robert Zemeckis", Synopsis: "Forrest Gump, un homme simple d'esprit mais au grand cœur, traverse plusieurs décennies de l'histoire américaine. Sa vie extraordinaire est tissée de rencontres avec des personnalités influentes et d'événements historiques clés."},

    {id : 8, Film: "Interstellar", image: "assets/img/interstellar.jpg", Genre: "Science-Fiction", Réalisateur: "Christopher Nolan", Synopsis: "Un groupe d'explorateurs entreprend un voyage interstellaire pour trouver une nouvelle planète habitable alors que la Terre est menacée par une famine mondiale. Interstellar mêle la science-fiction à des thèmes émotionnels et philosophiques."},

    {id : 9, Film: "The Matrix", image: "assets/img/matrix.jpg", Genre: "Science-Fiction", Réalisateur: "Lana et Lilly Wachowski", Synopsis: "Néo découvre que le monde qu'il connaît n'est qu'une simulation informatique créée par des machines intelligentes. Il rejoint une rébellion pour lutter contre ces machines et libérer l'humanité de la Matrice."},

    {id : 10, Film: "Amélie", image: "assets/img/amelie.webp", Genre: "Comédie romantique", Réalisateur: "Jean-Pierre Jeunet", Synopsis: "Amélie, une jeune femme imaginative, décide d'aider les gens autour d'elle à trouver le bonheur, tout en cherchant le sien à Montmartre, Paris. Le film capture la magie et la poésie de la vie quotidienne."}
    
];

let section = document.querySelector(".flex");

let suppresion = (e) =>{
    let cardSuppresion = document.getElementById(e.target.classList[1]);
    cardSuppresion.style.display = "none";
}

let createDiv = (e) => {
    let valueImg = document.querySelector(".form").childNodes[0].value;
    let valueGenre = document.querySelector(".form").childNodes[1].value;
    let valueTitle = document.querySelector(".form").childNodes[2].value;
    let valueAuthor = document.querySelector(".form").childNodes[3].value;
    let valueSynopsis = document.querySelector(".form").childNodes[4].value;
   
    let tab = { Film : valueTitle, image : valueImg, Genre : valueGenre, Réalisateur : valueAuthor, Synopsis : valueSynopsis};

    card(tab);
    //newDivButton();
 
}


let newDiv = (e) => {
    e.preventDefault();
    let divButton = document.querySelector('.buttonTest');
    divButton.innerHTML = "";
    let titleButton = document.querySelector('h2');
    titleButton.innerHTML = "Nouveau film";

    let form = document.createElement('div');
    form.className = "form";


    let inputImg = document.createElement('textarea');
    inputImg.setAttribute("type", "text");
    inputImg.setAttribute("placeholder", "Ex : https://facebook.com/becode.jpeg");
    inputImg.className = "inputButton";

    let inputGenre = document.createElement('textarea');
    inputGenre.setAttribute("type", "text");
    inputGenre.setAttribute("placeholder", "Ex : Drame");
    inputGenre.className = "inputButton";

    let inputh2 = document.createElement('textarea');
    inputh2.setAttribute("type", "text");
    inputh2.setAttribute("placeholder", "Ex : Titanic");
    inputh2.className = "inputButton";

    let inputh3 = document.createElement('textarea');
    inputh3.setAttribute("type", "text");
    inputh3.setAttribute("placeholder", "Ex : Steven Spielberg");
    inputh3.className = "inputButton";

    let inputSynopsis = document.createElement('textarea');
    inputSynopsis.setAttribute("type", "text");
    inputSynopsis.setAttribute("placeholder", "Ex : résumé d'un film");
    inputSynopsis.className = "inputButton";

    let inputConfirm = document.createElement('button');
    inputConfirm.innerHTML = "Confirmer";
    inputConfirm.className = "confirmButton";


    form.appendChild(inputImg);
    form.appendChild(inputGenre);
    form.appendChild(inputh2);
    form.appendChild(inputh3);
    form.appendChild(inputSynopsis);
    form.appendChild(inputConfirm);
    divButton.append(titleButton);
    divButton.appendChild(form);
    inputConfirm.addEventListener('click' , () => createDiv());
}


let newDivButton = (e) => {
    let nouvelleDiv = document.createElement('div');
    nouvelleDiv.className = "flex__card";


    let derniereDiv = section.lastElementChild;

    section.insertBefore(nouvelleDiv, derniereDiv);
}

function card (elem){
    let div = document.createElement('div');
   div.className = 'flex__card';
   div.id = elem.id;

   // bouton supprime
   let button = document.createElement('button');
   button.className = "flex__card__button";
   button.innerHTML = "X";
   button.classList.add(elem.id);
   button.addEventListener("click", suppresion);


   //creation de l'image
   let img = document.createElement('img');
   img.className = 'flex__card__img';
   img.setAttribute("src", elem.image);
   img.setAttribute("alt", "photo du film");

   //creation du p
   let p = document.createElement('p');
   p.className = 'flex__card__genre';
   if(elem.Genre == "Science-Fiction"){
    p.classList.add('backgroundcolor--science');
   }
   else if(elem.Genre == "Comédie musicale"){
    p.classList.add('backgroundcolor--musicale');
   }
   else if(elem.Genre == "Drame"){
    p.classList.add('backgroundcolor--drame');
   }
   else if(elem.Genre == "Crime"){
    p.classList.add('backgroundcolor--crime');
   }
   else if(elem.Genre == "Super-héros"){
    p.classList.add('backgroundcolor--heros');
   }
   else{
    p.classList.add('backgroundcolor--romance');
   }
   p.innerHTML = elem.Genre;

   //creation du h2
   let h2 = document.createElement('h2');
   h2.className = 'flex__card__title';
   h2.innerHTML = elem.Film;

   //creation du h3
   let h3 = document.createElement('h3');
   h3.className = 'flex__card__author';
   h3.innerHTML = elem.Réalisateur;

   //creation du synopsis
   let synopsis = document.createElement('p');
   synopsis.className = 'flex__card__synopsis';
   synopsis.innerHTML = elem.Synopsis;


   div.appendChild(button);
   div.appendChild(img);
   div.appendChild(p);
   div.appendChild(h2);
   div.appendChild(h3);
   div.appendChild(synopsis);
   section.appendChild(div);
}

function createmain(object){
for (let elem of object){
    card (elem);
}

//creation du bouton + 
let plus = document.createElement('div');
plus.className = "flex__card";
plus.classList.add("buttonTest");
let divPlus = document.createElement('div');
divPlus.className = "flex__card__buttonPlus"
let buttonPlus = document.createElement('button');
buttonPlus.innerHTML = "+";
buttonPlus.className = "buttonPlus__inside";

divPlus.append(buttonPlus);
plus.append(divPlus);
section.appendChild(plus);
buttonPlus.addEventListener('click', newDiv);

}

createmain(object);

function sortedGenre(object){
    object.sort((a, b) => (a.Genre > b.Genre) ? 1 : ((b.Genre > a.Genre) ? -1 : 0));
    
    
    let tab = section.querySelectorAll('div');
        for ( let element of tab){
            element.remove();
        }
    createmain(object);
}

sorted.addEventListener('click', () => sortedGenre(object));


