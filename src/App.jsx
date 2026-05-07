import './App.css'
import Header from './component/header.jsx'
import { useState } from 'react'
import ListaDeGastos from './component/LIstaDeGastos.jsx'
import aplicarLimite from './component/Limite.jsx'

function App() {
const [gastos, setGastos] = useState([]);
const agregarGasto = (nuevoGasto) => {aplicarLimite(gastos, nuevoGasto);
  setGastos([...gastos, nuevoGasto]); };

  const eliminarGasto = (indexBorrar) => {
    const nuevosLista = gastos.filter((_gasto, index) => index !== indexBorrar);
    setGastos(nuevosLista);
  }
 
    return ( 
    <>
      <Header 
      agregarGasto={agregarGasto}>
      </Header>
      <main className='main-content'>
        <div className='contenido'>
        <ListaDeGastos 
        gastos={gastos} 
        eliminarGasto={eliminarGasto} />
        </div>
      </main>
    </> 
  );
}
export default App

