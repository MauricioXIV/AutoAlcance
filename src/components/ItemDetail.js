import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";

const ItemDetail= ({ item }) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext)
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)
    
    const handleResta = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    
    const handleSuma = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="container">
            <div className="producto-details">
                <img src={item.image} alt="tupu" />
                <div>
                    <h3 className="titulo">{item.producto}</h3>
                    <p className="categoria">{item.categoria}</p>
                    <p className="precio">{item.precio}</p>
                    <ItemCount
                    cantidad={cantidad}
                    handleSuma={handleSuma}
                    handleResta={handleResta}
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail