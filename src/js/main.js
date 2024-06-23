'use strict';

// QUERY SELECTOR

const charactersCards = document.querySelector('.js__charactersCards');



// DATOS

let characters = []; 



// FUNCIONES

function renderCharacter (obj) {
  let imageUrl = 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';

  if (obj.imageUrl) {
    imageUrl = obj.imageUrl;
  }

  charactersCards.innerHTML += `<li class="js__cards cards">
    <img class="imgCards" src="${imageUrl}" alt="Foto de ${obj.name}">
    <p>${obj.name}</p></li>` 
    /* const html = charactersCards.innerHTML;
    return html; */
};

function renderAllCharacter() {
  let html = '';
  for (const character of characters) {
    html += renderCharacter(character);
  };
  
  const allCards = document.querySelectorAll('.js__cards');
  
  for (const eachCardLi of allCards) {
    
    eachCardLi.addEventListener('click', handleClickCard);
  }
}


// FUNCIONES DE EVENTOS (HANDLER)

function handleClickCard(ev) {
  console.log('Has hecho click');

  console.log(ev.currentTarget);

  ev.currentTarget.classList.toggle('favorite');

 

  
}


// EVENTOS


// CODIGO CUANDO CARGA LA PAGINA

console.log('Holis');



console.log('Antes');



  
fetch('//api.disneyapi.dev/character?pageSize=50')
   .then(response => response.json()) 
  .then(dataFromFetch => {
    /* console.log(dataFromFetch.data); */
    console.log('Dentro');
    characters = dataFromFetch.data;
    
     
    renderAllCharacter(); 
  });   

  console.log('despues');

   



    
   
   
 
      
