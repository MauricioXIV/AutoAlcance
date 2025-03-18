import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config"
const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

    const { register, handleSubmit } = useForm()
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id)
            vaciarCarrito()
        })
    }


    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Gracias por tus datos, MZ estará feliz :)</h1>
                <p>Tu número de pedido es {pedidoId} (no te llegará)</p>
            </div>
        )
    }


    return (
        <div className="container">
            <h2 className="main-title">Finalizar compra</h2>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu email" {...register("email")} />
                <input type="phone" placeholder="Ingresa tu teléfono" {...register("teléfono")} />

                <button type="submit" id="elBoton">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout