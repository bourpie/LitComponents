import { LitElement, html } from 'lit';

export class MyHamburgerMenu extends LitElement {
  render() {
    return html`
    <div>
    <slot></slot>
    </div>
    `;
  }
}

window.customElements.define('my-hamburger-element', MyHamburgerMenu);
