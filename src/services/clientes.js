const apiURL = 'https://prueba-api-clientes.herokuapp.com'
// const apiURL = 'http://localhost:3001'

export const getClientes = () => {
  return fetch(`${apiURL}/listclientes`)
    .then(res => res.json())
    .then(res => res)
}

export const getKpiClientes = () => {
  return fetch(`${apiURL}/kpideclientes`)
    .then(res => res.json())
    .then(json => json)
}

export const createCliente = (data) => {
  return fetch(`${apiURL}/creacliente`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => 'succes')

}

export const edad = (fecha) => {
  return Math.round((Date.now() - new Date(fecha).getTime()) / (1000 * 60 * 60 * 24 * 365))
}