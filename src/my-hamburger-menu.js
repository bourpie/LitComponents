import { LitElement, html } from 'lit';

export class MyHamburgerMenu extends LitElement {
  static get styles() {
    return css`

      :host {
        --my-hamburger-menu-display: none;
      }
      div {
      display: var(--my-hamburger-menu-display);
      }
    `;
  }
  render() {
    return html`
    <div>
    <slot></slot>
    </div>
    `;
  }
}

window.customElements.define('my-hamburger-element', MyHamburgerMenu);
