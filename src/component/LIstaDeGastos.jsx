import React, { useState } from 'react'
export default function ListaDeGastos({ gastos})


 {
  const [categoria, setCategoria] = useState('')
  const gastosFiltrados = categoria === ''
    ? gastos
    : gastos.filter(gasto => gasto.categoria === categoria);

  const total = gastosFiltrados.reduce((acum, gasto) => acum + parseFloat(gasto.monto), 0);

  return (
    <>
    <label>
            Categoría:
            <select
              name="categoria"
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
      <h2>Lista de Gastos</h2>
      {gastosFiltrados.map((gasto, index) => (
        <p key={index}>
          {gasto.descripcion} - ${gasto.monto} - {gasto.fecha} - {gasto.categoria}
        </p>
      ))}
      <p><strong>Total:</strong> ${total.toFixed(0)}</p>

    </>
  );
}