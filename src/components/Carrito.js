import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <div className="main-title">
            <h1>Carrito</h1>

            {
                carrito.map((prod) => (     
                    <div key={prod.id}>  
                    <h2>{prod.producto}</h2>
                    <p>Precio por unidad: ${prod.precio}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <br></br>
                    </div>
                ))
            }
            { carrito.length > 0 ?
            <>
            <h2>Total del carrito: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar</button>
            <Link to="/checkout" >Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío (compra y serás rico) :)</h2>
            }
        </div>
    )
}

export default Carrito