(()=>{var e={30:()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".add-task"),t=document.querySelector(".boards");let o;const n=e=>{o.style.top=e.clientY+"px",o.style.left=e.clientX+"px"},r=e=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r);const t=e.target.closest(".board");o.parentElement,t&&t.querySelector(".list")?(t.querySelector(".list").appendChild(o),o.style.position="relative",o.style.top=null,o.style.left=null,o.classList.remove("dragged")):(o.classList.remove("dragged"),o.style.position="relative",o.style.top=null,o.style.left=null)};t.addEventListener("mousedown",(function(e){if(e.preventDefault(),e.target.classList.contains("card")){o=e.target;const t=o.getBoundingClientRect();o.style.position="fixed",o.style.top=t.top+"px",o.style.left=t.left+"px",o.classList.add("dragged"),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r)}})),t.addEventListener("dragover",(function(e){e.preventDefault();const t=e.target.closest(".board");t&&t.classList.add("over")})),t.addEventListener("dragleave",(function(e){const t=e.target.closest(".board");t&&t.classList.remove("over")})),e.forEach((e=>{e.addEventListener("click",(function(){const t=e.closest(".board"),o=t.querySelector(".textarea-button");o.classList.toggle("show-textarea-button");const n=o.querySelector(".textarea"),r=o.querySelector(".send");n.removeAttribute("disabled"),n.focus(),r.addEventListener("click",(function(){const e=t.querySelector(".list"),o=n.value.trim();if(""!==o){const t=document.createElement("div");t.classList.add("card"),t.textContent=o,e.appendChild(t),n.value=""}}))}))})),document.querySelectorAll("textarea").forEach((e=>{e.addEventListener("click",(function(){this.focus()}))}))}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(30)})()})();