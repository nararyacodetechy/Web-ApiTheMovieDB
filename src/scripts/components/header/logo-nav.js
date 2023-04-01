class LogoNav extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
            :host {
                min-width: 100px;
            }
            :host li {
                list-style: none;
                text-decoration: none;
                font-weight: 600;
            }
            :host li a {
                color: white;
                text-decoration: none;
                font-size: 14px;
                transition: .2s ease-in-out;
            } 
            :host li a:hover {
                color: var(--secondary-color);
            }
            :host span {
                display: inline-block;
                color: var(--secondary-color);
            }
          </style>
          <li><a href="">Lets<span>Mov!e</span></a></li>
          `;
  }
}

customElements.define("logo-nav", LogoNav);
