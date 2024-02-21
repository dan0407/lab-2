class Body extends HTMLElement {
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
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Document</title>
				<style>
				* {
				padding: 0;
				margin: 0;
				border: 0;
			}
			.header {
				width: 100%;
				height: 100vh;
				display: flex;
				flex-direction: column;
				background-color: white;
				background-image: url('https://es.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_far_cry_6_05_2560x1080.jpg&height=506&sharpen');
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			}
			.menu {
				padding: 10px;
				width: 90%;
				margin-inline: auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.ho {
				margin: auto;
				width: 60px;
			}
			.hamburguesa img {
				border: 2px solid rgb(238, 203, 6);
				padding: 3px;
				width: 20px;
				cursor: pointer;
			}
			@media (min-width: 768px) {
				.hamburguesa {
					display: none;
				}
			}
			.navegacion {
				display: none;
			}
			@media (min-width: 768px) {
				.navegacion {
					display: block;
				}
			}
			.navegacion--lista {
				display: flex;
				padding-left: 0;
				gap: 40px;
				list-style: none;
			}
			.navegacion--lista a {
				text-decoration: none;
				color: rgb(255, 255, 255);
				font-weight: 700;
				font-size: 15px;
			}
			.navegacion--lista a:hover {
				color: rgb(238, 203, 6);
			}
			.informacion {
				flex: 1;
				padding: 20px;
				width: auto;
				display: flex;
				justify-content: center;
				align-items: center;
				height: fit-content;
			}
			@media (min-width: 768px) {
				.informacion {
					width: 50%;
					margin-inline: auto;
				}
			}
			.informacion--seccion {
				text-align: center;
				display: flex;
				flex-direction: column;
				gap: 15px;
				align-items: center;
				justify-content: center;
			}
			.informacion--seccion button {
				padding: 10px;
				border-radius: 10px;
				padding-inline: 30px;
				font-weight: 900;
				background-color: rgb(238, 203, 6);
				border: 2px solid rgb(238, 203, 6);
			}
			.informacion--seccion button:hover {
				cursor: pointer;
				border-color: rgb(238, 203, 6);
				background-color: rgb(255, 255, 255);
			}
				</style>
			</head>
			<body>
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
			</body>
		</html>
        `;
	}
}

customElements.define('bo-dy', Body);
export default Body;
