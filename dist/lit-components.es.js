import { LitElement, css, html } from "lit";
class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }
  static get properties() {
    return {
      name: { type: String },
      count: { type: Number }
    };
  }
  constructor() {
    super();
    this.name = "World";
    this.count = 0;
  }
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }
  _onClick() {
    this.count++;
  }
}
window.customElements.define("my-element", MyElement);
class MyHamburger extends LitElement {
  static get properties() {
    return {
      menu: { type: String },
      expanded: { type: Boolean }
    };
  }
  static get styles() {
    return css`
      :host {
        --my-hamburger-color: #d3531a;
      }
      button { 
        width: 60px;
        height: 45px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        border: none;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
      }

      button span {
        display: block;
        position: absolute;
        height: 9px;
        width: 100%;
        background: var(--my-hamburger-color);
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
      }

      button span:nth-child(1) {
        top: 0px;
        transform-origin: left center;
      }
      
      button span:nth-child(2) {
        top: 18px;
        transform-origin: left center;
      }
      
      button span:nth-child(3) {
        top: 36px;
        transform-origin: left center;
      }
      
     button.open span:nth-child(1) {
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
      }
      
      button.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }
      
      button.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 39px;
        left: 8px;
      }

    
    `;
  }
  constructor() {
    super();
    this.label = "Toggle navigation!";
  }
  render() {
    return html`
    <button 
      @click=${this._onClick} 
      aria-label="${this.label}" 
      aria-expanded="${this.expanded}"
      aria-controls="${this.menu}"
      class="${this.expanded === true ? "open" : ""}">
      <span></span>
      <span></span>
      <span></span>
    </button>
  `;
  }
  _onClick(e) {
    this.expanded = !this.expanded;
    let menu = document.getElementById(`${this.menu}`);
    menu.setAttribute("aria-hidden", `${!this.expanded}`);
  }
  connectedCallback() {
    super.connectedCallback();
    this.expanded = false;
    document.getElementById(`${this.menu}`).setAttribute("aria-hidden", "true");
  }
}
window.customElements.define("my-hamburger", MyHamburger);
export { MyElement, MyHamburger };
