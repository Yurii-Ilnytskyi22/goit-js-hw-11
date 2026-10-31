import{a as m,S as d,i as l}from"./assets/vendor-BX8YMJUK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="58335444-d34e9612c6e0b2a379739d3c4",g="https://pixabay.com/api/";async function h(i){return(await m.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const b=new d(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery"),a=document.querySelector(".loader");function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${e}" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${t}</span></p>
            <p class="info-item"><b>Views</b><span>${n}</span></p>
            <p class="info-item"><b>Comments</b><span>${u}</span></p>
            <p class="info-item"><b>Downloads</b><span>${f}</span></p>
          </div>
        </li>
      `).join("");p.innerHTML=r,b.refresh()}function S(){p.innerHTML=""}function w(){a&&(a.style.display="inline-block")}function q(){a&&(a.style.display="none")}const c=document.querySelector(".form"),P=c.querySelector('input[name="search-text"]');c.addEventListener("submit",i=>{i.preventDefault();const r=P.value.trim();if(r===""){l.warning({title:"Warning",message:"Please fill in the search field!",position:"topRight"});return}S(),w(),h(r).then(o=>{if(o.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{q(),c.reset()})});
//# sourceMappingURL=index.js.map
