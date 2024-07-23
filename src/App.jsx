
import Navbar from './componentes/NavBar'
import Articulos from './componentes/MuestraComp'
import './App.css'
import { fetchData } from './json/productos.js'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { NoEncontrado } from './componentes/NoEncontrado'
import { DetalleItem } from './componentes/DetalleItem.jsx'
// import productosjson from './json/productos-prueba.json'

function App() {


  const [ productos , setProductos] = useState([])

  useEffect(() => {
    fetchData()
    .then(response => {
      setProductos(response)
    })
    .catch(err => console.error(err))
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Articulos productos={productos}/>}/>
          <Route path='/detalle/:id' element={<DetalleItem productos={productos} />}/>
          <Route path='*' element={<NoEncontrado/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
