import React, { useState } from 'react'

    function Form() {
        const [nombre, setNombre] = useState('')
const [signo, setSigno] = useState('')


        function nombreHandleChange(evento) {
           setNombre(evento.target.value)
            }
        function signoHandleChange(evento) {
            setSigno(evento.target.value)
        }

        
            function handleSubmit(evento) {
            evento.preventDefault()
            const datosNuevos = {
                nombre: nombre,
                signo: signo
            }
            setNombre('')
            setSigno('')
            const newData = [...data, datosNuevos]
            setData(newData) 
        }
    

    
    
  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={nombre}
        onChange={nombreHandleChange}
        placeholder='Ingrese su nombre'
         />
          <input
        type='text'
        value={signo}
        onChange={signoHandleChange}
        placeholder='Ingrese signo zodiacal'
  />
  <button type='submit'> Enviar </button>
    </form>
  )}

export default Form