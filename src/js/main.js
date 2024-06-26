"use strict";

// QUERY SELECTOR

const charactersCards = document.querySelector(".js__charactersCards");
const favoritesCards = document.querySelector(".js__favoritesCards");
const InputSearch = document.querySelector(".js__inputText");
const searchBtn = document.querySelector(".js__searchButton");

// DATOS

let characters = [];
let favorites = [];

// FUNCIONES

function renderCharacter(obj, container) {
  
  let imageUrl =
    "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";

  if (obj.imageUrl) {
    imageUrl = obj.imageUrl;
  }

  container.innerHTML += `<li class="js__cards cards" data-id="${obj._id}">
    <img class="imgCards" src="${imageUrl}" alt="Foto de ${obj.name}">
    <p class="cardsText">${obj.name}</p></li>`;
}


function renderAllCharacter() {
  charactersCards.innerHTML = "";
  for (const character of characters) {
    renderCharacter(character, charactersCards);
  }

  const allCards = document.querySelectorAll(".js__cards");

  for (const eachCardLi of allCards) {
    eachCardLi.addEventListener("click", handleClickCard);
  }
}

function renderAllFavorites() {
    favoritesCards.innerHTML = ''; 
    
    for (const favorite of favorites) {
      renderCharacter(favorite, favoritesCards);
    }
  }


// FUNCIONES DE EVENTOS (HANDLER)

function handleClickCard(ev) {
 
  
  let characterClickedId = ev.currentTarget.dataset.id;

  const characterClickedObj = characters.find(
    (char) => char._id === parseInt(characterClickedId)
  );


  const clickedFavoriteIndex = favorites.findIndex(
    (characterClickedObj) =>
      characterClickedObj._id === parseInt(characterClickedId)
  );

  if (clickedFavoriteIndex === -1) {
    favorites.push(characterClickedObj);
    localStorage.setItem('favs', JSON.stringify(favorites));
    renderCharacter(characterClickedObj, favoritesCards);
  } else {
    favorites.splice(clickedFavoriteIndex, 1);
    localStorage.setItem('favs', JSON.stringify(favorites));
    renderAllFavorites();
  }

  ev.currentTarget.classList.toggle("favorite");

}

function handleClickSearch(ev) {
  ev.preventDefault();
  const searchedCharacter = InputSearch.value;
  fetch(`//api.disneyapi.dev/character?pageSize=50&name=${searchedCharacter}`)
    .then((response) => response.json())
    .then((dataFromFetch) => {
      characters = dataFromFetch.data;
      renderAllCharacter();
    });
}


// EVENTOS


searchBtn.addEventListener("click", handleClickSearch);

// CODIGO CUANDO CARGA LA PAGINA


fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((dataFromFetch) => {
    characters = dataFromFetch.data;
    renderAllCharacter();
  });

  
  
  
  renderAllFavorites();

const favsFromLS = JSON.parse(localStorage.getItem('favs'));

if(favsFromLS !== null ) {
  favorites = favsFromLS;
  renderAllFavorites();
}
