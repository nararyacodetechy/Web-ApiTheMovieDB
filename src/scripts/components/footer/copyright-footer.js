class CopyrightFooter extends HTMLElement {
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
                    margin-top: 30px;
                    color: rgb(85, 85, 85);
                    font-size: 14px;
                }
              </style>
    
              <p>Copyright &copy; Sport!d. All Rights Reserved.</p>
            `;
  }
}

customElements.define("copyright-footer", CopyrightFooter);
