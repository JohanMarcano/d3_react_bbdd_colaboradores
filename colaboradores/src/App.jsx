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
      <h1>Base datos colaboradores</h1>
      <Buscador colaboradores={colaboradores}/>
      <div className='d-flex justify-content-between'>
        <Listado colaboradores={colaboradores}/>
        <div className='d-flex flex-column'>
          <Formulario setMessage={setMessage} agregarColaborador={agregarColaborador}/>
          {
            message && <Alert message={message}/>
          }
          
        </div>
      </div>
    </Container>
  )
}

export default App
