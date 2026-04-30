  import './App.css'
  import Header from './component/header.jsx'
  import { useState } from 'react'
  import ListaDeGastos from './component/LIstaDeGastos.jsx'
  import Limite from './component/Limite.jsx'

  function App() {
  const [gastos, setGastos] = useState([]);
  const [categoria, setCategoria] = useState('');
const agregarGasto = (nuevoGasto) => { Limite(gastos, nuevoGasto, setGastos); };


    const total = gastos.reduce((acum, gasto) => acum + parseFloat(gasto.monto), 0);
    const eliminarGasto = (indexBorrar) => {
      const nuevosLista = gastos.filter((_gasto, index) => index !== indexBorrar);
      setGastos(nuevosLista);
    }

    return (
      <>
        <Header 
        agregarGasto={agregarGasto}>

        </Header>
        <main>
          <ListaDeGastos 
          gastos={gastos} 
          eliminarGasto={eliminarGasto} />

        </main>
      </>
    );
  }
  export default App
