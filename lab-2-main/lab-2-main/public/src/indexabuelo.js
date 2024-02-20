import * as components from `./components/indexpadre.js`;

class Appcontenedor extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: `open`});
  }

ConnectedCallback(){
  this.render();
}

render(){
  this.shadowRoot.innerHTML=`
  <banner-b></banner-b>
  `;
}

}
customElements.define("app-contenedor" , Appcontenedor);