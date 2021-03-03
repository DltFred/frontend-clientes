import { useEffect, useState } from "react"
import { edad, getClientes } from "../../services/clientes"

const setearDatos = getClientes().then(cliente => {
  try {
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
    return { cantidad, edades }
  } catch (error) {
    console.log(error)
  }
})

export const useGraphics = () => {
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
    setearDatos.then(x => {
      chart(x)
    })
  }, [datos])
  return datos
}