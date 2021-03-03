import './App.css'
import CardsInfo from './components/CardsInfo'
import Formulario from './components/Formulario'
import Graphics from './components/Graphics'
import ListaClientes from './components/ListaClientes'

function App() {
  return (
    <div className="App">
      <h1>Dashboard Clientes</h1>
      <div className='App-container'>
        <Formulario />
        <ListaClientes />
        <Graphics />
        <div className='App-info'>
          <CardsInfo title='Promedio' />
          <CardsInfo title='Desviacion' />
        </div>
      </div>
    </div>
  )
}

export default App
