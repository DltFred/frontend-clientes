import { useEffect, useState } from "react"
import { getKpiClientes } from "../services/clientes"
import './styles/Cards.css'

const CardsInfo = ({ title }) => {
  const [kpis, setKpis] = useState([{ prom: '', desv: '' }])
  useEffect(() => {
    getKpiClientes().then(res => setKpis(res), [])
  })
  return (
    <div className='cards'>
      <h2>{title}</h2>
      <p>{title === 'Promedio' ? kpis.prom : kpis.desv}</p>
    </div>
  )
}
export default CardsInfo  