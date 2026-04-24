    import '../css/header.css'
import React, { useState } from 'react'
    export default function Formulario({ agregarGasto, cerrarFormulario}) {
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [categoria, setCategoria] = useState('')
  const fechaActual = new Date().toLocaleDateString()
   const handleSubmit = (e) => {
    e.preventDefault();

     agregarGasto({
      descripcion,
      monto: parseFloat(monto),
      fecha: fechaActual,
      categoria
    })

    setDescripcion('')
    setMonto('')
    setCategoria('')
    setVisible(false)
  }
    return (
     <form className="formulario" onSubmit={handleSubmit}>
          <label>
            Descripción:
            <input
              type="text"
              name="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </label>

          <br />

          <label>
            Monto:
            <input
              className="formulario-input-monto"
              type="number"
              name="monto"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </label>

          <br />

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
          <button type="submit">Guardar</button>

          <button type="button" onClick={cerrarFormulario}>
            Cancelar
          </button>
        </form>
        )
     }