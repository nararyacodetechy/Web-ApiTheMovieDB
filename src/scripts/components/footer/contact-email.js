class ContactEmail extends HTMLElement {
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
                color: white;
                font-size: 14px;
            }
            :host a {
                text-decoration: none;
                color: white;
            }
            :host a:hover {
                color: var(--secondary-color);
            }
        </style>

        <p>Contact for Banner: <a href="">sportid.contact@gmail.com</a></p>
    `;
  }
}

customElements.define("contact-email", ContactEmail);
