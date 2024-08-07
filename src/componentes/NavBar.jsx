
import { Link } from "react-router-dom";
import { Carrito } from "./Carrito";
import "./NavBar.css";


function Navbar(){
    return(
        <>
            <nav className='nav'>
                <Link to={"/"}>
                    <img src="../assets/e63f3bb5e4a8a29f57e66dce2301f41d.png" alt="Logo Marca" />
                </Link>
                <ul className="links">
                    <li>
                        <Link to="/">
                            <a>Inicio</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos">
                            <a>Productos</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nosotros">
                            <a>Sobre nosotros</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactos">
                            <a>Contacto</a>
                        </Link>
                    </li>
                </ul>
                    <Carrito />
            </nav>
        </>
    )
}

export default Navbar

