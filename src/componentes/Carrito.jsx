import { useState } from "react"
import { useAppContext } from "../context/AppContext"
import "./carrito.css"
import { Producto } from "./Producto"
import Swal from 'sweetalert2'


export function Carrito(){

    const { carrito, setCarrito } = useAppContext()
    const [ cerrarCarrito , setCerrarCarrito ] = useState(true)

    const handleClick = () =>{
        Swal.fire({
            title: "Compra hecha",
            text: "Se a realizado su compra con exito",
            icon: "success"
          });

        setCarrito([])
    } 

    return(
        <div className="div-carrito">
            <label className="" htmlFor="checkBoxCarrito">
                
            </label>
            <button className="carrito-boton input-carrito"  id="checkBoxCarrito" onClick={() => setCerrarCarrito(!cerrarCarrito)}>
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="" />
                <p>{carrito.length}</p>
            </button>
            <aside className="carrito" hidden style={{
                display: cerrarCarrito ? "none" : "block",
                height: "100%"
            }}>
                <div className="header-carrito">
                    <p>Carrito</p>
                    <button className="cerrar-carrito" onClick={() => setCerrarCarrito(!cerrarCarrito)}>Cerrar</button>
                </div>
                
                {
                    carrito.map(producto => (
                        <Producto key={producto.id} id={producto.id} image={producto.image} description={producto.description} title={producto.title}  price={producto.price} onCarrito={true} cantidad={1} productoSeleccionado={producto} />
                    ))
                }
                {
                    carrito.length === 0 ? 
                    <p className="carrito-notProds">No hay productos en el carrito</p> : 
                    <div >
                        <button className="boton-del-carrito" onClick={() => handleClick()}>Comprar</button>
                        <button className="boton-del-carrito" onClick={() => setCarrito([])}>Borrar carrito</button>
                    </div>
                    
                }
                
            </aside>
        </div>        
    )
}