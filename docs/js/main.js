const a=document.querySelector(".js__charactersCards");let t=[];function c(e){let r="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";e.imageUrl&&(r=e.imageUrl),a.innerHTML+=`<li class="cards">
    <img src="${r}" alt="Foto de ${e.name}">
    <p>${e.name}</p></li>`}function l(){let e="";for(const r of t)e+=c(r);return e}console.log("Holis");console.log("Antes");fetch("https://api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log("Dentro"),t=e.data,l()});console.log("despues");
//# sourceMappingURL=main.js.map
