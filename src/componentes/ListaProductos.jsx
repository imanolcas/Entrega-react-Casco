import { Producto } from "./Producto.jsx";

export function ListaProductos({productos}){
    return(
    <>
        {
            productos.map(producto => (
                <Producto key={producto.id} id={producto.id} image={producto.image} description={producto.description} title={producto.title}  price={producto.price}/>
            ))
        }
    </>
)
}
