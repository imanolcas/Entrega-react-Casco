import { useEffect } from "react"
import { ListaProductos } from "./ListaProductos"
import "./productos.css"

function Articulos({ productos }){
    return(
       
        <aside> 
            {
            productos.length == 0 ? <p>Cargando productos...</p> :
            <>
                <h3>
                    Lista de productos
                </h3>
                <ul className="productos">
                    <ListaProductos productos={productos}/>
                </ul>
            </>
            }
            
        </aside>
    )
}

export default Articulos