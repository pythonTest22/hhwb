import React from 'react';
		import {Link} from 'react-router-dom';
		import logo from '../img/Pokemon.png';

		const NavBar =  () => {
			return (
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">
						<img src={logo} width="40" height="40" alt="Logo de pokeapi" />
					</Link>
					<Link className="navbar-brand text-primary" to="/">Pokedex</Link>
					<button className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="nvbarNavAltMarkup">
					</div>
				</nav>
			);
		}

		export default NavBar;