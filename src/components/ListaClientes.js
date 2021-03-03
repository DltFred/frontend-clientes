import { useEffect, useState } from "react"
import { edad, getClientes } from "../services/clientes"
import './styles/Tabla.css'
const ListaClientes = () => {
  const [clientes, setClientes] = useState([])
  useEffect(() => {
    getClientes().then(x => setClientes(x))
  }, [])

  return (
    <table id='tabla' className='tabla'>
      {clientes.errno
        ? <p>{clientes.errno + clientes.code + clientes.sqlMessage}</p>
        : <>
          <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>F. Nacim</th>
            <th>Edad</th>
          </thead>
          <tbody>
            {clientes.map(x =>
              <tr>
                <td>{x.nombre}</td>
                <td>{x.apellido}</td>
                <td>{x.fechaNacim.slice(0, 10)}</td>
                <td>{edad(x.fechaNacim)}</td>
              </tr>)}
          </tbody>
        </>}
    </table>
  )
}

export default ListaClientes