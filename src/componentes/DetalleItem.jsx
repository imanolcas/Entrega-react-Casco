import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Producto } from "./Producto";


export function DetalleItem( { productos } ){
    const { id } = useParams()
    const [productoSeleccionado , setProductoSeleccionado] = useState({})


    console.log(productos)
    console.log(id)
    
useEffect(() => {
        const findProduct = productos.find(el => el.id === parseInt(id))
        setProductoSeleccionado(findProduct)
        console.log(findProduct)
    }, [])

    

    if(productoSeleccionado == undefined){
        console.log("error", productoSeleccionado)
    }


    return(
        <>
            <Producto  id={productoSeleccionado.id} image={productoSeleccionado.image} description={productoSeleccionado.description} title={productoSeleccionado.title}  price={productoSeleccionado.price}/>
        </>
    )
}
