import './App.css'
import Header from './component/header.jsx'
import { useState } from 'react'
import ListaDeGastos from './component/LIstaDeGastos.jsx'

function App() {
  const [gastos, setGastos] = useState([]);
  const [categoria, setCategoria] = useState('');
  const agregarGasto = (nuevoGasto) => {
    setGastos([...gastos, nuevoGasto]);
  };

  const total = gastos.reduce((acum, gasto) => acum + parseFloat(gasto.monto), 0);

  return (
    <>
      <Header 
      agregarGasto={agregarGasto}>

      </Header>
      <main>
        <ListaDeGastos gastos={gastos} />
      </main>
    </>
  );
}
export default App