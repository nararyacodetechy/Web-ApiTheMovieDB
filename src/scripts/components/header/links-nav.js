class LinksNav extends HTMLElement {
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
            justify-content: end;
            gap: 2em;
            min-width: 550px;
          }
          :host li {
            list-style: none;
            text-decoration: none;
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
        </style>

        <li><a href="">Home</a></li>
        <li><a href="">Series List</a></li>
        <li><a href="">On Going</a></li>
        <li><a href="">Genre</a></li>
        <li><a href="">Popular</a></li>
        <li><a href="">Top Rated</a></li>
        `;
  }
}

customElements.define("links-nav", LinksNav);
