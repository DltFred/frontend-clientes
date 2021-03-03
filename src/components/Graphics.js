import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { edad, getClientes } from '../services/clientes'
import './styles/GraphicCard.css'



const Graphics = () => {
  const [datos, setDatos] = useState({})
  const chart = ({ cantidad, edades }) => {
    setDatos({
      labels: edades,
      datasets: [{
        label: 'cantidad de personas vs edades',
        data: cantidad,
        backgroundColor: ['rgb(255, 163, 13,1)']
      }],
    })
  }
  useEffect(() => {
    getClientes().then(cliente => {
      const datos = cliente.map(persona => edad(persona.fechaNacim))
      let dict = {}
      for (let edad of datos) {
        if (edad in dict) {
          ++dict[edad]
        } else {
          dict[edad] = 1
        }
      }
      const cantidad = Object.values(dict)
      const edades = Object.keys(dict)
      chart({ cantidad, edades })
    })
  }, [])
  return (
    <div className='graphicCard'>
      <p>Estadisticas de los clientes</p>
      <Line
        data={datos}
        options={{ responsive: true }}
      />
    </div>
  )

}
export default Graphics