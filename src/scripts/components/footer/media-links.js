class MediaLinks extends HTMLElement {
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
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
                :host li {
                    list-style: none;
                }
                :host li a{
                    color: white;
                    text-decoration: none;
                    font-size: 14px;
                }
                :host li a:hover {
                    color: var(--secondary-color);
                }
            </style>
  
            <li><a href="">DMCA</a></li>|
            <li><a href="">Contact Us</a></li>|
            <li><a href="">Fanspage</a></li>
          `;
  }
}

customElements.define("media-links", MediaLinks);
