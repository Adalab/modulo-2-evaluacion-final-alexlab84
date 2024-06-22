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

  charactersCards.innerHTML += `<li class="cards">
    <img src="${imageUrl}" alt="Foto de ${obj.name}">
    <p>${obj.name}</p></li>` 
    /* const html = charactersCards.innerHTML;
    return html; */
};

function renderAllCharacter() {
  let html = '';
  for (const character of characters) {
    html += renderCharacter(character);
  };
  return html;
}


// FUNCIONES DE EVENTOS (HANDLER)


// EVENTOS


// CODIGO CUANDO CARGA LA PAGINA

console.log('Holis');



console.log('Antes');



  
fetch('https://api.disneyapi.dev/character?pageSize=50')
   .then(response => response.json()) 
  .then(dataFromFetch => {
    /* console.log(dataFromFetch.data); */
    console.log('Dentro');
    characters = dataFromFetch.data;
    
     
    renderAllCharacter(); 
  });   

  console.log('despues');

   



    
   
   
 
      
