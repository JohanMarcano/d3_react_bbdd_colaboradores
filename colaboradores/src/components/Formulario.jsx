import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Formulario( {setMessage, agregarColaborador} ) {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');


  const actualizarStateNombre = (event) => {
    setNombre(event.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !nombre || !email || !edad || !cargo || !telefono  ) {
      
      setMessage({
        text: 'Completa todos los campos!',
        variant: 'danger'
      })

      return;
    }

    setMessage({
      text: 'Colaborador agregado!',
      variant: 'success'
    })

    const nuevoColaborador = {
      nombre,
      email,
      edad,
      cargo,
      telefono
    }
    agregarColaborador(nuevoColaborador)

  }

  return (
    <Form onSubmit={handleSubmit} className='mb-3'>
      <legend>Agregar Colaborador</legend>
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Nombre del colaborador" 
          value={nombre} 
          onChange={actualizarStateNombre} 
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control 
          type="email" 
          placeholder="Email del colaborador" 
          value={email}
          onChange={  e => setEmail(e.target.value)   }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control 
          type="number" 
          placeholder="Edad del colaborador" 
          value={edad}
          onChange={  e => setEdad(e.target.value)   }
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Cargo del colaborador" 
          value={cargo}
          onChange={  e => setCargo(e.target.value)   }
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control 
          type="tel" 
          placeholder="Telefono del colaborador" 
          value={telefono}
          onChange={  e => setTelefono(e.target.value)   }
          />
      </Form.Group>

      <Button variant="primary" type="submit" className='w-100'>
        Agregar Colaborador
      </Button>
    </Form>
    )
}

export default Formulario