import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {
    Table,
    Button
} from 'react-bootstrap';

const TablaEmpleadoPage = (props) => {

    return (
        <>
            <Table striped bordered hover>
                <thead className="table-dark">
                    <tr>
                        <th>Codigo</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Telefono</th>
                        <th>Fecha Nacimiento</th>
                        <th>Puesto</th>
                        <th>Dirección</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {props.lstEmpleados.map(emp =>
                        <tr key={emp.empleadoId}>
                            <td>{emp.codigo}</td>
                            <td>{emp.nombres}</td>
                            <td>{emp.apellidos}</td>
                            <td>{emp.telefono}</td>
                            <td>{emp.fechaNacimiento}</td>
                            <td>{emp.puesto.desPuesto}</td>
                            <td>{emp.direccion}</td>
                            <td><Button variant="warning" onClick={e => props.editarEmpleadoShow(emp)}><FontAwesomeIcon icon={faEdit} /></Button></td>
                            <td><Button variant="danger" onClick={e => props.eliminarEmpleadoShow(emp)}><FontAwesomeIcon icon={faTrashAlt} /></Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default TablaEmpleadoPage;