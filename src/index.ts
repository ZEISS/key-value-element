export {}

declare global {
  interface Window {
    KeyValueElement: typeof KeyValueElements
  }
  interface HTMLElementTagNameMap {
    'key-value-elements': KeyValueElements
    'key-value-element': KeyValueElement
  }
}

type KeyValue = {
  key: string
  value: string
}

const elements = new Array<KeyValue>()

export class KeyValueElements extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {}
}

export const defineExampleElement = () => {
  customElements.define('key-value-element', KeyValueElements)
}

customElements.define('key-value-elements', KeyValueElements)

export class KeyValueElement extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const key = document.querySelector('input[data-key-index]') as HTMLTemplateElement
    const value = document.querySelector('input[data-value-index]') as HTMLTemplateElement


    elements.push({key: key, value: 'value'})
  }
}

customElements.define('key-value-element', KeyValueElement)
