import { useEffect } from "react"
import { ListaProductos } from "./ListaProductos"
import "./productos.css"
import { Loader } from "./Loader"
import { useAppContext } from "../context/AppContext"
import { Filtros } from "./Filtros.jsx"

function Articulos( ){

    const { cargarData, productos, filtros } = useAppContext()

    useEffect(()=>{
        cargarData()
    })
    
    const productosFiltrados = (products) =>{
        return products.filter(product =>{
          return(
            product.price  >= filtros.precioMin &&
            (
              filtros.categoria == "todas" ||
              product.categoria == filtros.categoria
            )
          )
        })
    }

   

    return(
       
        <aside> 
            {
            productos.length == 0 ? 
            <Loader /> :
            <main className="main-productos">
                <h3>
                    Lista de productos
                </h3>
                <Filtros />
                
                    {
                      productosFiltrados(productos).length  == 0 ? 
                      <p>No hay productos con este precio</p> :
                      <ul className="productos"> 
                        <ListaProductos productos={productosFiltrados(productos)}/>
                      </ul>
                    }
                    
                
            </main>
            }
            
        </aside>
    )
}

export default Articulos