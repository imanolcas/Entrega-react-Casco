import { Link } from "react-router-dom"
           

export function Producto( { id, image, title, description, price } ){
    return(
        <li 
            key={id}
            className="li-producto">

                <img src={image} alt={description} />
                <div>
                    <strong>{title}</strong>
                </div>
                <div>
                    <p>${price}</p>
                </div>
                <div className="botones">
                    <button className="boton boton-mas">+</button>
                    <Link to={`/detalle/${id}`}>
                        <button className="boton boton-ver">Ver</button>
                    </Link>
                </div>
                
            </li>
    )
}