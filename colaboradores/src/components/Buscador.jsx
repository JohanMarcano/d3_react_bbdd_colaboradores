import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buscador( {colaboradores} ) {

  const [busqueda, setBusqueda] = useState('');
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const filtrados = colaboradores.filter(
      colaborador => colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

    setColaboradoresFiltrados(filtrados)

    // "Diego Riquelme".includes("diego")  -> true

  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className='mb-3'>
          
          <Form.Group className="mb-3" onSubmit={handleSubmit}>
              <Form.Control 
                type="text" 
                placeholder="Busca un colaborador" 
                value={busqueda} 
                onChange={e => setBusqueda(e.target.value) } 
              />
          </Form.Group> 

          <Button variant="dark" type="submit" className='w-100'>
                Buscar
          </Button>


      </Form>
      <div>
        {
          colaboradoresFiltrados && colaboradoresFiltrados.map(
            colaborador => (
                <div key={colaborador.id} >
                    <p>{colaborador.nombre}</p>
                    <p>{colaborador.email}</p>
                    <p>{colaborador.edad}</p>
                    <p>{colaborador.cargo}</p>
                    <p>{colaborador.telefono}</p>
                </div>
            )
        )
        }
      </div>
   </div>
  )
}

export default Buscador