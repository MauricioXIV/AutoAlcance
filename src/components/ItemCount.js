
const ItemCount = ({ cantidad, handleResta, handleSuma, handleAgregar }) => {


    return (
        <div>
            <div className="item-count">
                <button onClick={handleResta}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSuma}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount