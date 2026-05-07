import React, { useState } from 'react'

export default function ListaDeGastos({ gastos, eliminarGasto }) {

  const [categoria, setCategoria] = useState('')
  const [orden, setOrden] = useState('')

  const gastosFiltrados = categoria === ''
    ? gastos
    : gastos.filter(gasto => gasto.categoria === categoria)

  let gastosOrdenados = [...gastosFiltrados]

  if (orden === 'mayor') {
    gastosOrdenados.sort((a, b) => b.monto - a.monto)
  } else if (orden === 'menor') {
    gastosOrdenados.sort((a, b) => a.monto - b.monto)
  }

  const total = gastosFiltrados.reduce((acum, gasto) => {
    if (gasto.tipo === 'ingreso') {
      return acum + gasto.monto
    } else {
      return acum - gasto.monto
    }
  }, 0)

  return (
    <>
      <div className="filtros">
        <label>
          Categoría:
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            <option value="comida">Comida</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="otros">Otros</option>
          </select>
        </label>

        <label>
          Ordenar por:
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="">Sin orden</option>
            <option value="mayor">Mayor Monto</option>
            <option value="menor">Menor Monto</option>
          </select>
        </label>
      </div>

      
      <h2>Lista de Gastos</h2>

      {gastosOrdenados.map((gasto, index) => (
        <div key={index} className={`gasto ${gasto.tipo}`}>
          
          <div>
            <p>{gasto.descripcion}</p>
            <small>
              {gasto.fecha} • {gasto.categoria} • {gasto.tipo}
            </small>
          </div>

          <div>
            <span className="monto">${gasto.monto}</span>
            <button 
              className="eliminar"
              onClick={() => eliminarGasto(index)}
            >
              Eliminar
            </button>
          </div>

        </div>
      ))}

      <p className="total">
        <strong>Total:</strong> ${total.toFixed(0)}
      </p>
    </>
  )
}