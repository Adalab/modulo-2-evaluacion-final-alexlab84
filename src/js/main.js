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
  console.log(obj);
  let imageUrl =
    "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";

  if (obj.imageUrl) {
    imageUrl = obj.imageUrl;
  }

  container.innerHTML += `<li class="js__cards cards" data-id="${obj._id}">
    <img class="imgCards" src="${imageUrl}" alt="Foto de ${obj.name}">
    <p>${obj.name}</p></li>`;
}


function renderAllCharacter() {
  charactersCards.innerHTML = "";
  for (const character of characters) {
    console.log("entra aqui");
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
  console.log("Has hecho click");
  console.log(ev.currentTarget);
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
    renderCharacter(characterClickedObj, favoritesCards);
  } else {
    favorites.splice(clickedFavoriteIndex, 1);
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
      console.log(characters);
      renderAllCharacter();
    });
}


// EVENTOS


searchBtn.addEventListener("click", handleClickSearch);

// CODIGO CUANDO CARGA LA PAGINA


fetch("//api.disneyapi.dev/character?pageSize=50")
  .then((response) => response.json())
  .then((dataFromFetch) => {
    /* console.log(dataFromFetch.data); */
    console.log("Dentro");
    characters = dataFromFetch.data;

    renderAllCharacter();
  });

  
  
  
  renderAllFavorites();


