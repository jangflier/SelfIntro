var I=Object.defineProperty;var O=(o,t,a)=>t in o?I(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;var E=(o,t,a)=>O(o,typeof t!="symbol"?t+"":t,a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const u={LOADING_SCREEN_DELAY:1e3,TYPE_TEXT_DELAY:70,OFFSET_PERCENTAGE20:.2,OFFSET_PERCENTAGE70:.7,OFFSET_PERCENTAGE80:.8},v={checkTheme(o){const t=o.matches?"dark":"light";console.log(`Your system theme is ${t}!`)},async typeText(o,t,a){let e=o;for(let n=0;n<t.length;n++){await new Promise(i=>setTimeout(i,a));let s=t[n];if(s==="["){const i=document.createElement("strong");e=o.appendChild(i),s=""}else s==="]"?(e=o,s=""):s==="~"&&(s="🎶");e.innerHTML+=s}},checkScrollOffsetReached(o,t,a){const e=window.innerHeight*a,n=o.offsetTop,s=o.offsetHeight;return t>=n-e&&t<n+s-e},toggleActiveState(o={},t={},a=0){const e=window.scrollY,n=this.checkScrollOffsetReached(o,e,u.OFFSET_PERCENTAGE20);if(t.asideLinks[a].classList.toggle("active",n),n){if(a===0){const i=o.getElementsByClassName("intro-text");Array.from(i)[1].style.transform=`translateX(${e}px)`,Array.from(i)[2].style.transform=`translateX(-${e}px)`,o.style.animationPlayState="running"}}else o.style.animationPlayState="paused";if(!(!Object.values(t.isFadeInOnce).some(i=>i===!1)||!this.checkScrollOffsetReached(o,e,u.OFFSET_PERCENTAGE70))){if(!t.isFadeInOnce.about&&a===1){const i=Array.from(o.querySelectorAll(".profile-text > p")),h=o.querySelector(".profile-photo");h.style.animation="1s slideUp ease-in-out forwards",i.forEach((b,k)=>{b.style.animation=`1s slideRight ${k*.5}s ease-in-out forwards`});const l=o.querySelector(".about-category");l.style.pointerEvents="none",l.addEventListener("animationend",function b(k){l.style.pointerEvents="auto";const y=0;t.tablinks.tablinks[y].classList.add("active"),t.tablinks.tabcontents[y].classList.add("active"),t.tablinks.tabcontents[y].style.maxHeight=t.tablinks.tabcontents[y].scrollHeight+"px",t.isFadeInOnce.about=!0,l.removeEventListener("animationend",b)}),this.checkScrollOffsetReached(l,e,u.OFFSET_PERCENTAGE80)&&(l.style.animation="0.5s slideDown ease-in-out forwards")}!t.isFadeInOnce.experience&&a===2&&(Array.from(o.querySelectorAll("accordion-component")).forEach(i=>{i.animateFadeIn()}),t.isFadeInOnce.experience=!0),!t.isFadeInOnce.projects&&a===3&&(Array.from(o.querySelectorAll("modal-component")).forEach(i=>{i.animateFadeIn()}),t.isFadeInOnce.projects=!0),!t.isFadeInOnce.contact&&a===4&&(Array.from(o.querySelectorAll("#contact > article > nav > ul > li")).forEach((i,h)=>{i.style.animation=`1s ${h%2===0?"slideRight":"slideLeft"} ${h*.5}s ease-in-out forwards`}),t.isFadeInOnce.contact=!0)}}},C=window.matchMedia("(prefers-color-scheme: dark)");C.addEventListener("change",v.checkTheme);v.checkTheme(C);const F=document.getElementsByTagName("html")[0],x=document.getElementById("loading-screen"),d=document.getElementsByTagName("aside")[0],c=document.getElementsByClassName("intro-text");window.onload=async function(){let o=performance.getEntriesByType("navigation")[0];o.loadEventEnd-o.startTime<1e3&&await new Promise(s=>setTimeout(s,1e3)),console.log("Loading complete!");const a="My Name is [Yunseok Jang]~",e="I'm a Full Stack Engineer.";async function n(s,i){c[i].style.animation="fadeIn 1s ease-in-out",c[i].style.setProperty("--intro-text-content","'|'"),await v.typeText(c[i],s,u.TYPE_TEXT_DELAY),i===2?c[i].style.setProperty("--cursor-animation","blinkTypingCursor 1s step-end infinite"):c[i].style.setProperty("--intro-text-content","''")}setTimeout(async()=>{x.style.display="none",await n(a,1),await n(e,2)},[u.LOADING_SCREEN_DELAY]),x.style.opacity=0,F.style.overflowY="auto",d.style.animation="slideLeft 1.5s ease-in-out",c[0].style.animation="slideUp 1s ease-in-out"};const B=document.querySelectorAll("main > section"),N=Array.from(document.getElementsByClassName("link")),g=Array.from(document.getElementsByClassName("tablink")),w=Array.from(document.getElementsByClassName("tabcontent")),q={about:!1,experience:!1,projects:!1,contact:!1};let m="",A=()=>{};window.addEventListener("scroll",function(){B.forEach((o,t)=>{v.toggleActiveState(o,{asideLinks:N,tablinks:{tablinks:g,tabcontents:w},isFadeInOnce:q},t)})});g.forEach(o=>{o.addEventListener("click",t=>{t.target.classList.contains("active")||(clearTimeout(A),g.forEach(e=>{e.classList.toggle("active",e.getAttribute("name")===t.target.name)}),m===t.target.name?(w.forEach(e=>{e.getAttribute("name")===m?(e.classList.add("active"),e.style.maxHeight=`${e.scrollHeight}px`):e.classList.remove("active")}),m=""):w.forEach(e=>{const n=e.getAttribute("name");e.classList.contains("active")&&(e.classList.remove("active"),m=n,e.style.maxHeight="0"),n===t.target.name&&(e.classList.add("active"),A=setTimeout(()=>{m="",e.style.maxHeight=`${e.scrollHeight}px`},500))}))})});const p=document.getElementById("nav-aside-button");window.addEventListener("click",o=>{!d.querySelector("#nav-aside-container").contains(o.target)&&!d.querySelector("#nav-aside-button").contains(o.target)&&(p.classList.remove("active"),d.style.width="0")});p.addEventListener("click",o=>{p.classList.contains("active")?d.style.width="0":d.style.width="100%",p.classList.toggle("active")});const P=Array.from(document.getElementsByClassName("logo"));P.forEach(o=>{o.addEventListener("mousemove",t=>{const{width:a,height:e}=t.target.getBoundingClientRect();o.style=`transform: perspective(200px) rotateX(${Math.round(-40/e*t.offsetY+20)}deg) rotateY(${Math.round(40/a*t.offsetX-20)}deg)`}),o.addEventListener("mouseout",t=>{t.target.style="transform: rotate(0)"})});const T=new CSSStyleSheet;T.replaceSync(`
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
  `);const r=class r extends HTMLElement{constructor(){super(),r.accordionIdCounter+=1,this.accordionIdCounter=r.accordionIdCounter,this.accordionElement=null;const t=this.attachShadow({mode:"open"});this.shadowRoot.adoptedStyleSheets=[T],t.innerHTML=`
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
    `}connectedCallback(){const t=this.shadowRoot.querySelector(`#accordion-${r.accordionIdCounter}`);this.accordionElement=t;const a=t.querySelector("button");a&&a.addEventListener("click",e=>this.toggleAccordion(e)),this.updateTemplate()}disconnectedCallback(){const t=this.accordionElement.querySelector("button");t&&t.removeEventListener("click",this.toggleAccordion)}updateTemplate(){const t=this.accordionElement.querySelector(".accordion-title");this.hasAttribute("data-accordion-title")&&t&&(t.innerText=this.getAttribute("data-accordion-title"))}toggleAccordion(t){const a=this.accordionElement.querySelector(".accordion-panel"),e=this.accordionElement.classList.contains("active"),n=this.accordionElement.querySelector("button > svg");e&&a&&(this.accordionElement.classList.remove("active"),n.style.animation="accordion-inactive-arrow var(--accordion-animation-delay) ease-in-out forwards",a.style.maxHeight=0),!e&&a&&(this.accordionElement.classList.add("active"),n.style.animation="accordion-active-arrow var(--accordion-animation-delay) ease-in-out forwards",a.style.maxHeight=`${a.scrollHeight}px`)}animateFadeIn(){this.accordionElement&&(this.accordionElement.style.animation=`1s slideDown ${(this.accordionIdCounter-1)*.3}s ease-in-out forwards`)}};E(r,"accordionIdCounter",0);let S=r;customElements.define("accordion-component",S);const f=class f extends HTMLElement{constructor(){super(),this.modalIdCounter=f.incrementCounter(),this.modalElement=null,this.modalButtonElement=null;const t=this.attachShadow({mode:"open"});t.adoptedStyleSheets=[f.sharedStyles],t.innerHTML=`
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
          <a class="modal-link" href="" aria-label="Project Link" draggable="false" target="_blank" rel="noopener noreferrer">Open</a>
        </div>
      </div>
    `}static incrementCounter(){return this._counter||(this._counter=0),++this._counter}connectedCallback(){this.modalElement=this.shadowRoot.querySelector(`#modal-${this.modalIdCounter}`),this.modalButtonElement=this.shadowRoot.querySelector(`#modal-button-${this.modalIdCounter}`);const t=this.modalButtonElement.querySelector("button.modal-open");t&&t.addEventListener("click",a=>this.openModal(a)),this.updateTemplate()}disconnectedCallback(){const t=this.modalElement.querySelector("button");t&&t.removeEventListener("click",this.openModal)}updateTemplate(){const t=this.modalButtonElement.querySelector(".modal-title"),a=this.modalElement.querySelector(".modal-title"),e=this.modalElement.querySelector(".modal-link");this.hasAttribute("data-modal-title")&&this.hasAttribute("data-modal-link")&&t&&a&&e&&(t.innerText=this.getAttribute("data-modal-title"),a.innerText=this.getAttribute("data-modal-title"),e.href=this.getAttribute("data-modal-link"))}openModal(t){this.modalElement.classList.add("open");const a=this.modalElement.querySelector("button.modal-close");a&&a.addEventListener("click",e=>this.closeModal(e))}closeModal(t){this.modalElement.classList.remove("open");const a=this.modalElement.querySelector("button.modal-close");a&&a.removeEventListener("click",this.closeModal)}animateFadeIn(){this.modalButtonElement&&(this.modalButtonElement.style.animation=`1s slideDown ${(this.modalIdCounter-1)*.3}s ease-in-out forwards`)}};E(f,"sharedStyles",(()=>{const t=new CSSStyleSheet;return t.replaceSync(`
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
      box-shadow: 0px 0px 2rem var(--neutral-color);
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
      background-color: rgba(0, 0, 0, 0.5);
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
      font-size: 3rem;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header button.modal-close {
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all 0.5s;
    }
    .modal-header button.modal-close:hover {
      transform: rotateZ(180deg);
      filter: brightness(1.2);
    }
    [class*="modal-close-"] {
      width: 3.5rem;
      height: calc(3.5rem / 6);
      margin: calc(3.5rem / 6);
      background-color: var(--neutral-color);
    }
    .modal-close-bar1 {
      transform: translateY(calc(3.5rem / 6)) rotate(45deg);
    }
    .modal-close-bar2 {
      transform: translateY(calc(-3.5rem / 6)) rotate(-45deg);
    }
    .modal-body {
      flex-grow: 1;
      width: 100%;
      padding: 3rem;
      overflow-y: auto;
      border-radius: 3rem;
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
    .modal-footer .modal-link {
      transition: color 0.5s;
    }
    .modal-footer .modal-link:hover {
      color: tomato;
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
  `),t})());let L=f;customElements.define("modal-component",L);
