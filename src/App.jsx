
import Navbar from './componentes/NavBar'
import Articulos from './componentes/MuestraComp'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { NoEncontrado } from './componentes/NoEncontrado'
import { DetalleItem } from './componentes/DetalleItem.jsx'
import { ContextProvider } from './context/AppContext.jsx'
import { Inicio } from './componentes/inicio.jsx'



// import productosjson from './json/productos-prueba.json'

function App() {


  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/productos' element={<Articulos />}/>
          <Route path='/detalle/:id' element={<DetalleItem />}/>
          <Route path='*' element={<NoEncontrado/>}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
