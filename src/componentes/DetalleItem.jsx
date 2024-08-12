import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Producto } from "./Producto";
import { useAppContext } from "../context/AppContext";


export function DetalleItem(){
    const { id } = useParams()
    const [productoSeleccionado , setProductoSeleccionado] = useState({})
    const { cargarData, productos } = useAppContext()

    useEffect(()=>{
        cargarData()
    })

    
    useEffect(() => {
        const findProduct = productos.find(el => el.id === parseInt(id))
        setProductoSeleccionado(findProduct)
    })

    return(
        <>
            <Producto 
                key={productoSeleccionado.id}  
                id={productoSeleccionado.id} 
                image={productoSeleccionado.image} 
                description={productoSeleccionado.description} 
                title={productoSeleccionado.title}  
                price={productoSeleccionado.price} 
                detalle={true}/>
        </>
    )
}
