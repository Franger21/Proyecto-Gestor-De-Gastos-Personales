import '../css/header.css'
import Formulario from './Formulario.jsx'
import React, { useState } from 'react'

function Header({ agregarGasto }) {
  const [visible, setVisible] = useState(false)
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const fechaActual = new Date().toLocaleDateString()


  const mostrarFormulario = () => {
    setVisible(true)
  }

  const cerrarFormulario = () => {
    setVisible(false)
    setDescripcion('')
    setMonto('')

  }
  

  return (
    <>
      <header>
        <p>{new Date().toLocaleDateString()}</p>

        <h1>Gestor De Gastos Personales</h1>

        <button onClick={mostrarFormulario}>
          AGREGAR
        </button>
      </header>
{visible && (
  <div className="overlay" onClick={cerrarFormulario}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <Formulario 
        agregarGasto={agregarGasto} 
        cerrarFormulario={cerrarFormulario}
      />
    </div>
  </div>
)}
    </>
  )
}

export default Header