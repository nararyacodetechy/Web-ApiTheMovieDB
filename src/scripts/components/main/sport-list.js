class SportList extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = ``;
  }
}

customElements.define("sport-list", SportList);
