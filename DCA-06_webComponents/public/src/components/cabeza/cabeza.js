class cabeza extends HTMLElement {
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
        .abajo {
          display: flex;
          justify-content: center;
          background-color: rgb(255, 0, 0);
          color: rgb(0, 0, 0);
        }

        .contenedor {
          display: flex;
          justify-content: center;
          background-color: rgb(255, 0, 0);
        }

        .images {
          justify-content: center;
          width: 400px;
          width: 0%, 10%;
        }

        </style>
      </head>
      <body>
        <div class="abajo">
          <h1>UBISOFT NEWS</h1>
        </div>
        <div class="contenedor">
          <img
            class="images"
            src="https://i.3djuegos.com/juegos/16914/asphalt_9_legends/fotos/ficha/asphalt_9_legends-4987872.jpg"
            width="400px"
            ;
            alt=""
          />
          <img
            class="images"
            src="https://sm.ign.com/ign_es/game/r/rainbow-si/rainbow-six-siege_d2b2.jpg"
            width="400px"
            ;
            alt=""
          />

          <img
            class="images"
            src="https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA13726_00/1/i_ebb51e47babede481b7eda44898d4f5c282df3a222a983670eed4c99cefe38ab/i/icon0.png"
            width="400px"
            ;
            alt=""
          />
        </div>
        <link rel="stylesheet" href="./cabeza.css" />
      </body>
    </html>
        `;
	}
}

customElements.define('ca-beza', cabeza);
export default cabeza;
