const t=document.querySelector(".js__charactersCards");let a=[];function l(e){let c="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";e.imageUrl&&(c=e.imageUrl),t.innerHTML+=`<li class="js__cards cards">
    <img class="imgCards" src="${c}" alt="Foto de ${e.name}">
    <p>${e.name}</p></li>`}function s(){let e="";for(const r of a)e+=l(r);const c=document.querySelectorAll(".js__cards");for(const r of c)r.addEventListener("click",o)}function o(e){console.log("Has hecho click"),console.log(e.currentTarget),e.currentTarget.classList.toggle("favorite")}console.log("Holis");console.log("Antes");fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{console.log("Dentro"),a=e.data,s()});console.log("despues");
//# sourceMappingURL=main.js.map
