const o=new CSSStyleSheet;o.replaceSync(`
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
  `);class t extends HTMLElement{static accordionIdCounter=0;constructor(){super(),t.accordionIdCounter+=1,this.accordionIdCounter=t.accordionIdCounter,this.accordionElement=null;let e=this.attachShadow({mode:"open"});this.shadowRoot.adoptedStyleSheets=[o],e.innerHTML=`
    <style>
    </style>
    <div id="accordion-${t.accordionIdCounter}" class="accordion">
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
    `}connectedCallback(){let o=this.shadowRoot.querySelector(`#accordion-${t.accordionIdCounter}`);this.accordionElement=o;let e=o.querySelector("button");e&&e.addEventListener("click",o=>this.toggleAccordion(o)),this.updateTemplate()}disconnectedCallback(){let o=this.accordionElement.querySelector("button");o&&o.removeEventListener("click",this.toggleAccordion)}updateTemplate(){let o=this.accordionElement.querySelector(".accordion-title");this.hasAttribute("data-accordion-title")&&o&&(o.innerText=this.getAttribute("data-accordion-title"))}toggleAccordion(o){let t=this.accordionElement.querySelector(".accordion-panel"),e=this.accordionElement.classList.contains("active"),a=this.accordionElement.querySelector("button > svg");e&&t&&(this.accordionElement.classList.remove("active"),a.style.animation="accordion-inactive-arrow var(--accordion-animation-delay) ease-in-out forwards",t.style.maxHeight=0),!e&&t&&(this.accordionElement.classList.add("active"),a.style.animation="accordion-active-arrow var(--accordion-animation-delay) ease-in-out forwards",t.style.maxHeight=`${t.scrollHeight}px`)}animateFadeIn(){this.accordionElement&&(this.accordionElement.style.animation=`1s slideDown ${(this.accordionIdCounter-1)*.3}s ease-in-out forwards`)}}customElements.define("accordion-component",t);
//# sourceMappingURL=index.02f68502.js.map
