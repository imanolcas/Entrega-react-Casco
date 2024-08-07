import { useAppContext } from "../context/AppContext"
import "./filtros.css"

export function Filtros (){
    const { filtros, setFiltros } = useAppContext()


    const handleChange = (e) =>{
        
        if(e.target.name == "filtro-minprecio"){
            setFiltros(prevState => ({
                ...prevState,
                precioMin: e.target.value
            })
            )
        }else if(e.target.name == "filtro-categoria"){
            setFiltros(prevState => ({
                ...prevState,
                categoria: e.target.value
            })
            )
        }
    }


    return(
        <section className="filtros">
            <p className="filtros-p">Filtros</p>
            <div className="filtros-inputs">
                <div className="div-minprice">
                    <label className="filtros-label" htmlFor="filtro-minprecio">Precio Min:</label>
                    <input 
                        className="filtros-minprice"
                        id="precioMinimo"
                        name="filtro-minprecio"
                        type="range" 
                        min="0"
                        max="1000"
                        value={filtros.precioMin}
                        onChange={handleChange}
                        />
                    <span className="filtros-minprice-span">{filtros.precioMin}</span>
                </div>
                <div className="div-categoria">
                    <label className="filtros-label" htmlFor="filtro-categoria">Categoria:</label>
                    <select className="filtros-categoria" id="filtro-categoria" name="filtro-categoria" onChange={handleChange}>
                        <option value={"todas"}>Todas</option>
                        <option value={"pantalon"}>Pantalon</option>
                        <option value={"remera"}>Remera</option>
                        <option value={"buzo"}>Buzo</option>
                    </select>       
                </div>
                 
            </div>
        </section>
    )
}