class pies extends HTMLElement {
	static get observedAttributes() {
		return ['message'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); // encapsulation, mode open means this is reachable for js on your web
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
        .arriba {
          display: flex;
          justify-content: center;
          background-color: darkgrey;
          color: snow;
        }
        .banner {
          display: flex;
          justify-content: center;
          background-color: darkgrey;
        }

        .imagen {
          justify-content: center;
          width: 400px;
        }

        </style>
      </head>
      <body>
        <div class="arriba">
          <h1>UBISOFT STORE</h1>
        </div>
        <div class="banner">
          <img
            class="imagen"
            src="https://image.api.playstation.com/vulcan/ap/rnd/202306/0113/38ad0cc5b92af440d46ccebf5d1f271213d656684fce3385.png"
            alt="" />
          <img
            class="imagen"
            src="https://image.api.playstation.com/vulcan/ap/rnd/202305/2309/02a7644b160e11678ca5332d6e0eb5fdd87902aa3087d446.png"
            alt="" />
          <img
            class="imagen"
            src="https://image.api.playstation.com/vulcan/ap/rnd/202206/1518/CXwcR0z8bOWFWrgRLpj9PfsI.png"
            alt=""
        /></div>

        <link rel="stylesheet" href="./body.css" />
      </body>
    </html>
        `;
	}
}

customElements.define('pi-es', pies);
export default pies;
