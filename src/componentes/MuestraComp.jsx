

function Articulos({ productos }){
    return(
        <aside>
            <h3>
                Lista de productos
            </h3>
            <div className="productos">
                {productos}
            </div>
        </aside>
    )
}

export default Articulos