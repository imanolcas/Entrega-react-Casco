
import "./NavBar.css";

function Navbar(){
    return(
        <>
            <nav className='nav'>
                <img src="../assets/e63f3bb5e4a8a29f57e66dce2301f41d.png" alt="Logo Marca" />
                <ul className="links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="carrito">
                    <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="" />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar

