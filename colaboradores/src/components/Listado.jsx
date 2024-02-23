import Table from 'react-bootstrap/Table';


function Listado(  {colaboradores}  ) {

    return (

    <div>

        <h1>Listado de colaboradores</h1>
        <Table striped bordered hover >

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </tr>
            </thead>

            <tbody>
                {
                    colaboradores.map(
                        colaborador => (
                            <tr key={colaborador.id} >
                                <td>{colaborador.nombre}</td>
                                <td>{colaborador.email}</td>
                                <td>{colaborador.edad}</td>
                                <td>{colaborador.cargo}</td>
                                <td>{colaborador.telefono}</td>
                            </tr>
                        )
                    )
                }
            </tbody>

        </Table>

    </div>


  )
}

export default Listado
