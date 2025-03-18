import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito"))  || []

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarAlCarrito = (item, cantidad) => {
      const itemAgregado = {...item, cantidad}
  
      const nuevoCarrito = [...carrito]
      const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)
  
      if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad
          setCarrito(nuevoCarrito)
      } else {
          setCarrito( [...carrito, itemAgregado] )
      }
  }
  
    const cantidadEnCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
    const precioTotal = () => {
      return carrito.reduce((acc, num) => acc + num.precio * num.cantidad, 0)
    }

    useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
    <CartContext.Provider value={ {
      carrito, 
      agregarAlCarrito,
      cantidadEnCarrito,
      vaciarCarrito,
      precioTotal
      } }>
        {children}
    </CartContext.Provider>
    )
}