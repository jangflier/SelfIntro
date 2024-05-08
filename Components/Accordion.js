"use strict";
const accordionSharedStyles = new CSSStyleSheet();
accordionSharedStyles.replaceSync(
  `
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
  `
);

class Accordion extends HTMLElement {
  static accordionIdCounter = 0;
  constructor() {
    super();
    Accordion.accordionIdCounter += 1;
    this.accordionIdCounter = Accordion.accordionIdCounter;
    this.accordionElement = null;
    const shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [accordionSharedStyles];

    shadow.innerHTML = `
    <style>
    </style>
    <div id="accordion-${Accordion.accordionIdCounter}" class="accordion">
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
    `;
  }

  connectedCallback() {
    const accordionElement = this.shadowRoot.querySelector(
      `#accordion-${Accordion.accordionIdCounter}`
    );
    this.accordionElement = accordionElement;
    const accordionButtonElement = accordionElement.querySelector("button");

    if (accordionButtonElement) {
      accordionButtonElement.addEventListener("click", (e) => this.toggleAccordion(e));
    }

    this.updateTemplate();
  }

  disconnectedCallback() {
    const accordionButtonElement = this.accordionElement.querySelector("button");

    if (accordionButtonElement) {
      accordionButtonElement.removeEventListener("click", this.toggleAccordion);
    }
  }

  updateTemplate() {
    const accordionTitle = this.accordionElement.querySelector(".accordion-title");

    if (this.hasAttribute("data-accordion-title") && accordionTitle) {
      accordionTitle.innerText = this.getAttribute("data-accordion-title");
    }
  }

  toggleAccordion(e) {
    const accordionPanel = this.accordionElement.querySelector(".accordion-panel");
    const isActive = this.accordionElement.classList.contains("active");
    const svgElement = this.accordionElement.querySelector("button > svg");

    if (isActive && accordionPanel) {
      this.accordionElement.classList.remove("active");
      svgElement.style.animation =
        "accordion-inactive-arrow var(--accordion-animation-delay) ease-in-out forwards";
      accordionPanel.style.maxHeight = 0;
    }
    if (!isActive && accordionPanel) {
      this.accordionElement.classList.add("active");
      svgElement.style.animation =
        "accordion-active-arrow var(--accordion-animation-delay) ease-in-out forwards";
      accordionPanel.style.maxHeight = `${accordionPanel.scrollHeight}px`;
    }
  }

  animateFadeIn() {
    if (this.accordionElement)
      this.accordionElement.style.animation = `1s slideDown ${
        (this.accordionIdCounter - 1) * 0.3
      }s ease-in-out forwards`;
  }
}

customElements.define("accordion-component", Accordion);
