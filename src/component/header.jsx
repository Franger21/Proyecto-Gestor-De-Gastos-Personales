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
    setCategoria('')
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
        <Formulario agregarGasto={agregarGasto} cerrarFormulario={cerrarFormulario}/>
      )}
    </>
  )
}

export default Header