import { Line } from 'react-chartjs-2'
import { useGraphics } from './hooks/useGraphics'
import './styles/GraphicCard.css'

const Graphics = () => {
  const datos = useGraphics({})
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