const t=new CSSStyleSheet;t.replaceSync(`
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
  `);class e extends HTMLElement{static modalIdCounter=0;constructor(){super(),e.modalIdCounter+=1,this.modalIdCounter=e.modalIdCounter,this.modalElement=null,this.modalButtonElement=null;let o=this.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=t.cssRules?Array.from(t.cssRules).map(t=>t.cssText).join(""):"",o.appendChild(a),o.innerHTML=`
      <div id="modal-button-${e.modalIdCounter}" class="modal-open-container">
        <button type="button" class="modal-open">
          <div class="modal-title">NULL</div>
        </button>
      </div>
      <div id="modal-${e.modalIdCounter}" class="modal">
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
          <a
            class="modal-link"
            href=""
            aria-label="Project Link"
            draggable="false"
            >Open</a
          >
        </div>
      </div>
    `,o.prepend(a)}connectedCallback(){this.modalElement=this.shadowRoot.querySelector(`#modal-${this.modalIdCounter}`),this.modalButtonElement=this.shadowRoot.querySelector(`#modal-button-${this.modalIdCounter}`);let t=this.modalButtonElement.querySelector("button.modal-open");t&&t.addEventListener("click",t=>this.openModal(t)),this.updateTemplate()}disconnectedCallback(){let t=this.modalElement.querySelector("button");t&&t.removeEventListener("click",this.openModal)}updateTemplate(){let t=this.modalButtonElement.querySelector(".modal-title"),e=this.modalElement.querySelector(".modal-title"),o=this.modalElement.querySelector(".modal-link");this.hasAttribute("data-modal-title")&&this.hasAttribute("data-modal-link")&&t&&e&&o&&(t.innerText=this.getAttribute("data-modal-title"),e.innerText=this.getAttribute("data-modal-title"),o.href=this.getAttribute("data-modal-link"))}openModal(t){this.modalElement.classList.add("open");let e=this.modalElement.querySelector("button.modal-close");e&&e.addEventListener("click",t=>this.closeModal(t))}closeModal(t){this.modalElement.classList.remove("open");let e=this.modalElement.querySelector("button.modal-close");e&&e.removeEventListener("click",this.closeModal)}animateFadeIn(){this.modalButtonElement&&(this.modalButtonElement.style.animation=`1s slideDown ${(this.modalIdCounter-1)*.3}s ease-in-out forwards`)}}customElements.define("modal-component",e);
//# sourceMappingURL=index.43ebd1bc.js.map
