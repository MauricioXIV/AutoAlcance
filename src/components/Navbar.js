import React from "react";
import "../hojas-de-estilo/Navbar.css"
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
      <nav className="navbar">
				<Link to="/" className="logo"><h1>AutoAlcance</h1></Link>
				<ul className="opciones">
					<li className="lista"><Link className="menu-link" to="/">Inicio</Link></li>
					<li className="lista"><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
					<li className="lista"><Link className="menu-link" to="/productos">Productos</Link></li>
					<li className="lista"><Link className="menu-link" to="/productos/Nissan">Nissan</Link></li>
					<li className="lista"><Link className="menu-link" to="/productos/Volvo">Volvo</Link></li>
					<li className="lista"><Link className="menu-link" to="/productos/Toyota">Toyota</Link></li>
					<li className="lista"><Link className="menu-link" to="productos/Chevrolet">Chevrolet</Link></li>
					<li className="lista"><Link className="menu-link" to="/contacto">Contacto</Link></li>
					<li className="lista"><CartWidget /></li>
					


				</ul>
      </nav>
    )
}

export default Navbar