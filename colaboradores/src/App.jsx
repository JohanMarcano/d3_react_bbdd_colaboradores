import './App.css'
import { BaseColaboradores } from './data/BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Alert from './components/Alert'
import Buscador from './components/Buscador'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';


function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [message, setMessage] = useState();

  const agregarColaborador = (colaborador) => {
    setColaboradores( [...colaboradores, colaborador] )
  }

  return (
    <Container>
      <h1>Base de datos colaboradores</h1>
      <div className='row'>
        <div className='col-md-8'>
          <Buscador colaboradores={colaboradores}/>
          <Listado colaboradores={colaboradores}/>
        </div>
        <div className='col-md-4'>
          <div className='d-flex flex-column'>
            <Formulario setMessage={setMessage} agregarColaborador={agregarColaborador}/>
            {
            message && <Alert message={message}/>
            }
          </div>
        </div>
      </div>
    </Container>

  )
}

export default App
