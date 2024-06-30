
import Navbar from './componentes/NavBar'
import Articulos from './componentes/MuestraComp'
import './App.css'
import productosjson from './json/productos.json'


function App() {

const productos = productosjson.search 

console.log(productos)

  return (
    <>
      <Navbar/>
      <Articulos/>
    </>
  )
}

export default App
