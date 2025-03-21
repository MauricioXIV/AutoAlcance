import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return(
        <div className="producto">
            <img src={producto.image} alt="caca" className="tupu"/>
            <div>
                <h4>{producto.producto}</h4>
                <p>Precio: ${producto.precio}</p>
                <p>Categoría: {producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item