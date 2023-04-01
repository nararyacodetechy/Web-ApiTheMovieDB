import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchNav extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
            ${css}
        </style>
        
        <form class="d-flex" role="search">
            <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style="height: 35px; font-size: 13px"
            />
            <button class="btn btn-outline-success" style="height: 35px; font-size: 13px" type="submit">
                Search
            </button>
        </form>
    `;
  }
}

customElements.define("search-nav", SearchNav);
