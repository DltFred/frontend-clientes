/* eslint-disable react-hooks/exhaustive-deps */
import { createCliente, edad } from "../services/clientes"
import './styles/Formulario.css'

const Formulario = () => {
  const pintarCliente = (cliente) => {
    const template = `<tr>
    <td>${cliente.nombre}</td>
    <td>${cliente.apellido}</td>
    <td>${cliente.fechaNacim.slice(0, 10)}</td>
    <td>${edad(cliente.fechaNacim)}</td>
    </tr>`
    const tabla = document.getElementById('tabla')
    tabla.insertAdjacentHTML('beforeend', template)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { nombre, apellido, fnacim } = e.target
    const data = {
      nombre: nombre.value,
      apellido: apellido.value,
      fechaNacim: fnacim.value
    }
    const respuesta = createCliente(data)
    nombre.value = ''
    apellido.value = ''
    fnacim.value = ''
    respuesta.then(x => {
      if (x === 'succes') {
        pintarCliente(data)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <h1>Nuevo Cliente</h1>
      <input placeholder='Nombre' name='nombre' required />
      <input placeholder='Apellido' name='apellido' required />
      <label>
        Fecha de nacimiento <input id='fnacim' name='fnacim' type='date' required />
      </label>
      <button>Crear</button>
    </form>
  )
}

export default Formulario