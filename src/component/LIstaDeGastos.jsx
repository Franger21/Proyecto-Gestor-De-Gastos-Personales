  import React, { useState } from 'react'
  export default function ListaDeGastos({ gastos, eliminarGasto })
  


  {
    const [categoria, setCategoria] = useState('')
    const gastosFiltrados = categoria === ''
      ? gastos
      : gastos.filter(gasto => gasto.categoria === categoria);
    
    const[tipo, setTipo] = useState('') 
    const total = gastosFiltrados.reduce((acum, gasto) => {
      if (gasto.tipo == 'ingreso') {
        return acum + (gasto.monto);
      } else {
        return acum - (gasto.monto);
      }
    }, 0);
    const [orden, setOrden] = useState('');
    let gastosOrdenados = [...gastosFiltrados];
    if (orden == 'mayor') {
      gastosOrdenados.sort((a, b) => b.monto - a.monto);
    } else if (orden == 'menor') {
      gastosOrdenados.sort((a, b) => a.monto - b.monto);
    }

    return (
      <>
      <label>
              Categoría:
              <select
                name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                <option value="comida">Comida</option>
                <option value="transporte">Transporte</option>
                <option value="entretenimiento">Entretenimiento</option>
                <option value="otros">Otros</option>
              </select>
      </label>
      
      <label>
        ordenar por:
        <select name="orden" value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="">Sin orden</option>
          <option value= "mayor"> Mayor Monto</option>
          <option value="menor"> Menor Monto</option>
        </select>
         
      </label>   

        
       
        <h2>Lista de Gastos</h2>
        {gastosOrdenados.map((gasto, index) => (
          <div key={index}>
            <p>
            {gasto.descripcion} - ${gasto.monto} - {gasto.fecha} - {gasto.categoria} - {gasto.tipo}
          </p>
          <button onClick={() => eliminarGasto(index)}>
            Eliminar
          </button>
          </div>
        ))}
        <p><strong>Total:</strong> ${total.toFixed(0)}</p>

      </>
    );
  }