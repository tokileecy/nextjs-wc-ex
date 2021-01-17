export class HelloWebComponents extends HTMLElement {
  constructor() {
    super()
    this._containerElement = null
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `
      <div class="container">
      </div>
    `
  }

  connectedCallback() {
    console.log('hello-web-components connected!')
    setTimeout(() => {
      this.gretting()
    })
  }

  disconnectedCallback() {
    console.log('hello-web-components disconnected!')
  }

  get containerElement() {
    if (!this._containerElement) {
      this._containerElement = this.shadowRoot.querySelector('.container')
    }
    return this._containerElement
  }

  gretting() {
    const grettingDiv = document.createElement('div')
    grettingDiv.innerText = 'Hello WebComponents!'
    this.containerElement.appendChild(grettingDiv)
  }
}

customElements.define('hello-web-components', HelloWebComponents)
