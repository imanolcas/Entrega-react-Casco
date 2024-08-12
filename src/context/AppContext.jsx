import { createContext, useContext, useState } from "react";
import { fetchData } from "../json/productos";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCK0B8U2mX0Hl42KNLIKCwieBL_JTATiuA",
    authDomain: "react-flex-mauro.firebaseapp.com",
    projectId: "react-flex-mauro",
    storageBucket: "react-flex-mauro.appspot.com",
    messagingSenderId: "845875527962",
    appId: "1:845875527962:web:3ee21765f56be60b6e2ca3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const productosCollection = collection(db, "items")

const appContext = createContext()

export const useAppContext = () => useContext(appContext);

export const ContextProvider = ( props ) =>{
    const [ productos, setProductos ] = useState([])
    const [ carrito, setCarrito ] = useState([])
    
    const [ filtros, setFiltros ] = useState({
        precioMin: 0,
        categoria: "todas"
    })
  
    
    


    const cargarData = () =>{

        getDocs(productosCollection).then(snapshot => {
            let arrayProductos = snapshot.docs.map(el => el.data());
            setProductos(arrayProductos)
        }).catch(err => console.error(err))

        // fetchData()
        //     .then(response => {
        //         setProductos(response)
        //     })
        //     .catch(err => console.error(err))

    }





    function agregarProducto (id) {

        const carritoNuevo = [...carrito]
        const agregarElProducto = productos.find(el => el.id === id)
        const indiceEnCarrito = carritoNuevo.findIndex(el => el.id === id)
        // const nuevoProductos = productos.find(el => el.id == e)
        if(indiceEnCarrito >= 0){
            carritoNuevo[indiceEnCarrito].cantidad += 1;
        }else{
            carritoNuevo.push({ ...agregarElProducto, cantidad: 1 });
        }

        setCarrito(carritoNuevo)
        
    }

    function eliminarProducto (id) {

        const carritoNuevo = [...carrito]
        const indiceEnCarrito = carritoNuevo.findIndex(el => el.id === id)
        
        carritoNuevo[indiceEnCarrito].cantidad -= 1;

        if(carritoNuevo[indiceEnCarrito].cantidad <= 0){
            const listaSinProducto = carritoNuevo.filter(ele => ele.id !== id)
            setCarrito(listaSinProducto)
        }else{
            setCarrito(carritoNuevo)
        }
    }




    return(
        <appContext.Provider value={{cargarData, agregarProducto, eliminarProducto, carrito, setCarrito, productos, filtros, setFiltros}}>
            {props.children}
        </appContext.Provider>
    )
}