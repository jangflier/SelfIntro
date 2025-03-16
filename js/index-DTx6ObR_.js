var I=Object.defineProperty;var T=(a,t,o)=>t in a?I(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o;var v=(a,t,o)=>T(a,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const y={LOADING_SCREEN_DELAY:1e3,TYPE_TEXT_DELAY:70,OFFSET_PERCENTAGE20:.2,OFFSET_PERCENTAGE70:.7},p={checkTheme(a){let t="light";a.matches&&(t="dark"),console.log(`Your system theme is ${t}!`)},async typeText(a,t,o){let e=a;for(let n=0;n<t.length;n++){await new Promise(i=>setTimeout(i,o));let s=t[n];if(s==="["){let i=document.createElement("strong");e=a.appendChild(i),s=""}else s==="]"?(e=a,s=""):s==="~"&&(s="🎶");e.innerHTML+=s}},checkScrollOffsetReached(a,t,o){const e=window.innerHeight*o,n=a.offsetTop,s=a.offsetHeight;return t>=n-e&&t<n+s-e},toggleActiveState(a={},t={},o=0){const e=window.scrollY,n=this.checkScrollOffsetReached(a,e,y.OFFSET_PERCENTAGE20);if(t.asideLinks[o].classList.toggle("active",n),n){if(o===0){const i=a.getElementsByClassName("intro-text");Array.from(i)[1].style.transform=`translateX(${e}px)`,Array.from(i)[2].style.transform=`translateX(-${e}px)`,a.style.animationPlayState="running"}}else a.style.animationPlayState="paused";if(!(!Object.values(t.isFadeInOnce).some(i=>i===!1)||!this.checkScrollOffsetReached(a,e,y.OFFSET_PERCENTAGE70))){if(!t.isFadeInOnce.about&&o===1){const i=Array.from(a.querySelectorAll(".profile-text > p")),u=a.querySelector(".profile-photo");u.style.animation="1s slideUp ease-in-out forwards",i.forEach((A,C)=>{A.style.animation=`1s slideRight ${C*.5}s ease-in-out forwards`});const f=0;t.tablinks.tablinks[f].classList.add("active"),t.tablinks.tabcontents[f].classList.add("active"),t.tablinks.tabcontents[f].style.maxHeight=t.tablinks.tabcontents[f].scrollHeight+"px",t.isFadeInOnce.about=!0}!t.isFadeInOnce.experience&&o===2&&(Array.from(a.querySelectorAll("accordion-component")).forEach(i=>{i.animateFadeIn()}),t.isFadeInOnce.experience=!0),!t.isFadeInOnce.projects&&o===3&&(Array.from(a.querySelectorAll("modal-component")).forEach(i=>{i.animateFadeIn()}),t.isFadeInOnce.projects=!0),!t.isFadeInOnce.contact&&o===4&&(Array.from(a.querySelectorAll("#contact > article > nav > ul > li")).forEach((i,u)=>i.style.animation=`1s ${u%2===0?"slideRight":"slideLeft"} ${u*.5}s ease-in-out forwards`),t.isFadeInOnce.contact=!0)}}},x=window.matchMedia("(prefers-color-scheme: dark)");x.addEventListener("change",p.checkTheme);p.checkTheme(x);const B=document.getElementsByTagName("html")[0],L=document.getElementById("loading-screen"),c=document.getElementsByTagName("aside")[0],l=document.getElementsByClassName("intro-text");window.onload=async function(){let a=performance.getEntriesByType("navigation")[0];a.loadEventEnd-a.startTime<1e3&&await new Promise(s=>setTimeout(s,1e3)),console.log("Loading complete!");const o="My Name is [Yunseok Jang]~",e="I'm a Full Stack Engineer.";async function n(s,i){l[i].style.animation="fadeIn 1s ease-in-out",l[i].style.setProperty("--intro-text-content","'|'"),await p.typeText(l[i],s,y.TYPE_TEXT_DELAY),i===2?l[i].style.setProperty("--cursor-animation","blinkTypingCursor 1s step-end infinite"):l[i].style.setProperty("--intro-text-content","''")}setTimeout(async()=>{L.style.display="none",await n(o,1),await n(e,2)},[y.LOADING_SCREEN_DELAY]),L.style.opacity=0,B.style.overflowY="auto",c.style.animation="slideLeft 1.5s ease-in-out",l[0].style.animation="slideUp 1s ease-in-out"};const O=document.querySelectorAll("main > section"),N=Array.from(document.getElementsByClassName("link")),b=Array.from(document.getElementsByClassName("tablink")),g=Array.from(document.getElementsByClassName("tabcontent")),q={about:!1,experience:!1,projects:!1,contact:!1};let d="",S=()=>{};window.addEventListener("scroll",function(){O.forEach((a,t)=>{p.toggleActiveState(a,{asideLinks:N,tablinks:{tablinks:b,tabcontents:g},isFadeInOnce:q},t)})});b.forEach(a=>{a.addEventListener("click",t=>{t.target.classList.contains("active")||(clearTimeout(S),b.forEach(e=>{e.classList.toggle("active",e.getAttribute("name")===t.target.name)}),d===t.target.name?(g.forEach(e=>{e.getAttribute("name")===d?(e.classList.add("active"),e.style.maxHeight=`${e.scrollHeight}px`):e.classList.remove("active")}),d=""):g.forEach(e=>{const n=e.getAttribute("name");e.classList.contains("active")&&(e.classList.remove("active"),d=n,e.style.maxHeight="0"),n===t.target.name&&(e.classList.add("active"),S=setTimeout(()=>{d="",e.style.maxHeight=`${e.scrollHeight}px`},500))}))})});const h=document.getElementById("nav-aside-button");window.addEventListener("click",a=>{!c.querySelector("#nav-aside-container").contains(a.target)&&!c.querySelector("#nav-aside-button").contains(a.target)&&(h.classList.remove("active"),c.style.width="0")});h.addEventListener("click",a=>{h.classList.contains("active")?c.style.width="0":c.style.width="100%",h.classList.toggle("active")});const F=Array.from(document.getElementsByClassName("logo"));F.forEach(a=>{a.addEventListener("mousemove",t=>{const{width:o,height:e}=t.target.getBoundingClientRect();a.style=`transform: perspective(200px) rotateX(${Math.round(-40/e*t.offsetY+20)}deg) rotateY(${Math.round(40/o*t.offsetX-20)}deg)`}),a.addEventListener("mouseout",t=>{t.target.style="transform: rotate(0)"})});const k=new CSSStyleSheet;k.replaceSync(`
  :host {
    --accordion-animation-delay: 0.3s;
  }
  * {
    font-family: var(--main-font);
    color: var(--font-color);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  .accordion {
    opacity: 0;
  }
  .accordion > button {
    cursor: pointer;
    border: unset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--neutral-color);
    box-shadow: 0 7px var(--secondary-color);
    transition: all var(--accordion-animation-delay) ease-in-out;
  }
  .accordion > button:hover {
    filter: brightness(1.2);
  }
  .accordion > button > svg {
    width: 3rem;
    height: 3rem;
  }
  .accordion > button > svg > path {
    fill: var(--font-color);
  }
  .accordion > .accordion-panel {
    background-color: var(--primary-color);
    margin: 1rem;
    border-radius: 1rem;
    max-height: 0;
    overflow: hidden;
    box-sizing: border-box;
    transition: max-height var(--accordion-animation-delay) ease-in-out;
  }
  .accordion.active > button {
    transform: translateY(5px);
    box-shadow: 0 2px var(--secondary-color);
  }
  .accordion.active > .accordion-panel {
    max-height: auto;
  }
  .accordion-panel-container {
    padding: 1rem;
  }

  @keyframes accordion-active-arrow {
    from {
      transform: rotate(0);
    }
    80% {
      transform: rotate(210deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  @keyframes accordion-inactive-arrow {
    from {
      transform: rotate(-180deg);
    }
    80% {
      transform: rotate(30deg);
    }
    to {
      transform: rotate(0);
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(-3rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  `);const r=class r extends HTMLElement{constructor(){super(),r.accordionIdCounter+=1,this.accordionIdCounter=r.accordionIdCounter,this.accordionElement=null;const t=this.attachShadow({mode:"open"});this.shadowRoot.adoptedStyleSheets=[k],t.innerHTML=`
    <style>
    </style>
    <div id="accordion-${r.accordionIdCounter}" class="accordion">
      <button type="button">
        <div class="accordion-title">NULL</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
          <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
        </svg>
      </button>
      <div class="accordion-panel">
        <div class="accordion-panel-container">
          <slot></slot>
        </div>
      </div>
    </div>
    `}connectedCallback(){const t=this.shadowRoot.querySelector(`#accordion-${r.accordionIdCounter}`);this.accordionElement=t;const o=t.querySelector("button");o&&o.addEventListener("click",e=>this.toggleAccordion(e)),this.updateTemplate()}disconnectedCallback(){const t=this.accordionElement.querySelector("button");t&&t.removeEventListener("click",this.toggleAccordion)}updateTemplate(){const t=this.accordionElement.querySelector(".accordion-title");this.hasAttribute("data-accordion-title")&&t&&(t.innerText=this.getAttribute("data-accordion-title"))}toggleAccordion(t){const o=this.accordionElement.querySelector(".accordion-panel"),e=this.accordionElement.classList.contains("active"),n=this.accordionElement.querySelector("button > svg");e&&o&&(this.accordionElement.classList.remove("active"),n.style.animation="accordion-inactive-arrow var(--accordion-animation-delay) ease-in-out forwards",o.style.maxHeight=0),!e&&o&&(this.accordionElement.classList.add("active"),n.style.animation="accordion-active-arrow var(--accordion-animation-delay) ease-in-out forwards",o.style.maxHeight=`${o.scrollHeight}px`)}animateFadeIn(){this.accordionElement&&(this.accordionElement.style.animation=`1s slideDown ${(this.accordionIdCounter-1)*.3}s ease-in-out forwards`)}};v(r,"accordionIdCounter",0);let E=r;customElements.define("accordion-component",E);const m=class m extends HTMLElement{constructor(){super(),this.modalIdCounter=m.incrementCounter(),this.modalElement=null,this.modalButtonElement=null;const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=[m.sharedStyles],t.innerHTML=`
      <div id="modal-button-${this.modalIdCounter}" class="modal-open-container">
        <button type="button" class="modal-open">
          <div class="modal-title">NULL</div>
        </button>
      </div>
      <div id="modal-${this.modalIdCounter}" class="modal">
        <div class="modal-header">
          <div class="modal-title">NULL</div>
          <button type="button" class="modal-close">
            <div class="modal-close-bar1"></div>
            <div class="modal-close-bar2"></div>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <a class="modal-link" href="" aria-label="Project Link" draggable="false">Open</a>
        </div>
      </div>
    `}static incrementCounter(){return this._counter||(this._counter=0),++this._counter}connectedCallback(){this.modalElement=this.shadowRoot.querySelector(`#modal-${this.modalIdCounter}`),this.modalButtonElement=this.shadowRoot.querySelector(`#modal-button-${this.modalIdCounter}`);const t=this.modalButtonElement.querySelector("button.modal-open");t&&t.addEventListener("click",o=>this.openModal(o)),this.updateTemplate()}disconnectedCallback(){const t=this.modalElement.querySelector("button");t&&t.removeEventListener("click",this.openModal)}updateTemplate(){const t=this.modalButtonElement.querySelector(".modal-title"),o=this.modalElement.querySelector(".modal-title"),e=this.modalElement.querySelector(".modal-link");this.hasAttribute("data-modal-title")&&this.hasAttribute("data-modal-link")&&t&&o&&e&&(t.innerText=this.getAttribute("data-modal-title"),o.innerText=this.getAttribute("data-modal-title"),e.href=this.getAttribute("data-modal-link"))}openModal(t){this.modalElement.classList.add("open");const o=this.modalElement.querySelector("button.modal-close");o&&o.addEventListener("click",e=>this.closeModal(e))}closeModal(t){this.modalElement.classList.remove("open");const o=this.modalElement.querySelector("button.modal-close");o&&o.removeEventListener("click",this.closeModal)}animateFadeIn(){this.modalButtonElement&&(this.modalButtonElement.style.animation=`1s slideDown ${(this.modalIdCounter-1)*.3}s ease-in-out forwards`)}};v(m,"sharedStyles",(()=>{const t=new CSSStyleSheet;return t.replaceSync(`
    :host {
      --modal-animation-delay: 0.3s;
    }
    * {
      font-family: var(--main-font);
      color: var(--font-color);
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-weight: normal;
    }
    .body-no-scroll {
      overflow: hidden;
    }
    .modal-open-container {
      opacity: 0;
      transition: all var(--modal-animation-delay) ease-in-out;
    }
    .modal-open-container:hover {
      filter: brightness(1.2);
    }
    .modal-open {
      cursor: pointer;
      font-size: 2rem;
      padding: 1rem;
      border-radius: 1rem;
      transition: all var(--modal-animation-delay) ease-in-out;
      border: 0;
      background: linear-gradient(to right, var(--neutral-color), tomato);
    }
    .modal {
      display: flex;
      flex-direction: column;
      position: fixed;
      gap: 2rem;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding: 3rem 5rem;
      visibility: hidden;
      opacity: 0;
      transform: scale(0);
      transition: 
        transform var(--modal-animation-delay) ease-in-out,
        opacity var(--modal-animation-delay) ease-in-out,
        visibility 0s var(--modal-animation-delay);
      z-index: 9999;
    }
    .modal::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(5px);
      z-index: -1;
    }
    .modal.open {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      transition:
        transform var(--modal-animation-delay) ease-in-out,
        opacity var(--modal-animation-delay) ease-in-out, visibility 0s 0s;
    }
    .modal-header {
      display: flex;
      font-size: 5rem;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header button.modal-close {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    [class*="modal-close-"] {
      width: 5rem;
      height: calc(5rem / 6);
      margin: calc(5rem / 6);
      background-color: var(--neutral-color);
      transition: all 0.5s;
    }
    .modal-close-bar1 {
      transform: translateY(calc(5rem / 6)) rotate(45deg);
    }
    .modal-close-bar2 {
      transform: translateY(calc(-5rem / 6)) rotate(-45deg);
    }
    .modal-body {
      flex-grow: 1;
      width: 100%;
      padding: 3rem;
      overflow-y: auto;
      border-radius: 5rem;
      background: linear-gradient(to bottom, var(--neutral-color), tomato);
    }
    .modal-body::-webkit-scrollbar {
      width: 0.5rem;
    }
    .modal-body::-webkit-scrollbar-thumb {
      background-color: var(--secondary-color);
      box-shadow: inset 0 0 0.5rem black;
      border-radius: 1rem;
    }
    .modal-body::-webkit-scrollbar-thumb:hover {
      background-color: var(--neutral-color);
    }
    .modal-footer {
      font-size: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @keyframes slideDown {
      from {
        transform: translateY(-3rem);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `),t})());let w=m;customElements.define("modal-component",w);
