class banner extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({ mode: `open` });
	}

	ConnectedCallback() {
		this.render();
	}

	render() {
		shadowRoot.innerHTML = `
		<link rel="stylesheet" href="./src/componentes/banner/banner,css">
		<header class="header">
			<div class="menu">
				<div class="logo">
					<img
						class="ho"
						src="https://wholesgame.com/wp-content/uploads/Ubisoft-Montreal-Logo-Dark-Thumb-Square-PNG.png"
						alt=""
					/>
				</div>
				<div class="hamburguesa">
					<img src="menu-hamburguesa.png" alt="Menu" />
				</div>
				<nav class="navegacion">
					<ul class="navegacion--lista">
						<li><a href="#">CLASSES</a></li>
						<li><a href="#">TOURNEY</a></li>
						<li><a href="#">CLUB</a></li>
						<li><a href="#">ABOUT</a></li>
						<li><a href="#">CONTACT</a></li>
					</ul>
				</nav>
			</div>
			<div class="informacion">
				<div class="informacion--seccion">
					<h1>HAVE AN AVENTURE</h1>
					<p>join us to a new experience </p>
					<button type="button">JOIN US</button>
				</div>
			</div>
		</header>
		`;
	}
}
customElements.define(`banner-b`, benner);
export default banner;
