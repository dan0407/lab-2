import * as components from './components/index.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); // encapsulation, mode open means this is reachable for js on your web
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <bo-dy></bo-dy>
    <pi-es></pi-es>
		<ca-beza></ca-beza>
    `;
	}
}

customElements.define('app-container', AppContainer);

// reference: https://developer.mozilla.org/es/docs/Web/Web_Components
// reference: https://www.youtube.com/watch?v=neko6u1vHcY&list=PLTd5ehIj0goNQNCgtu-M2oGGpyQ1m6nxo
