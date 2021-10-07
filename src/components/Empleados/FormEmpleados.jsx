import React from 'react';
import {
    Button,
    Form
} from 'react-bootstrap';

const FormEmpleados = (props) => {
    const { empleado, tipoAccion } = props;
    return (
        <>
            <h3 className="text-center text-capitalize"> {props.tipoAccion} empleado</h3>
            <Form >
                <Form.Group className="mb-3" controlId="txtId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="number" value={empleado.empleadoId} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="codigo">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="number" name="codigo" value={empleado.codigo} onChange={e => props.handleChangeForm(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombres">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" name="nombres" value={empleado.nombres} onChange={e => props.handleChangeForm(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" name="apellidos" value={empleado.apellidos} onChange={e => props.handleChangeForm(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" name="telefono" value={empleado.telefono} onChange={e => props.handleChangeForm(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="fechaNacimiento">
                    <Form.Label>Fecha Nacimiento</Form.Label>
                    <Form.Control type="date" name="fechaNacimiento" value={empleado.fechaNacimiento} onChange={e => props.handleChangeForm(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="puesto">
                    <Form.Label>Puesto</Form.Label>
                    {tipoAccion === 'crear' && <Form.Select defaultValue="" name="puestoId" onChange={e => props.handleChangeForm(e)}>
                        <option value="">Seleccione el Puesto</option>
                        {props.lstPuestos.map(p =>
                            <option
                                key={p.puestoId}
                                value={p.puestoId}
                            // selected={tipoAccion === 'crear' ? false : p.puestoId === empleado.puestoId}
                            >
                                {p.desPuesto}
                            </option>
                        )}
                    </Form.Select>}

                    {tipoAccion !== 'crear' && <Form.Select value={tipoAccion !== 'crear' ? empleado.puestoId : ''} name="puestoId" onChange={e => props.handleChangeForm(e)}>
                        <option value="">Seleccione el Puesto</option>
                        {props.lstPuestos.map(p =>
                            <option
                                key={p.puestoId}
                                value={p.puestoId}
                                selected={tipoAccion === 'crear' ? false : p.puestoId === empleado.puestoId}
                            >
                                {p.desPuesto}
                            </option>
                        )}
                    </Form.Select>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="direccion">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control as="textarea" rows={3} name="direccion" value={empleado.direccion} onChange={e => props.handleChangeForm(e)} />
                </Form.Group>

                {props.tipoAccion === 'crear' && <Button variant="success" className="mx-2" type="submit" onClick={e => { props.handleCrear(e) }}> Crear </Button>}
                {props.tipoAccion === 'editar' && <Button variant="warning" className="mx-2" type="submit" onClick={e => { props.handleEditar(e) }}> Editar </Button>}
                {props.tipoAccion === 'eliminar' && <Button variant="danger" className="mx-2" type="submit" onClick={e => { props.handleEliminar(e) }}> Eliminar </Button>}
                <Button variant="secondary" type="reset" onClick={() => props.handleLimpiarForm()}>
                    Limpiar
                </Button>
            </Form>
        </>
    );
}

export default FormEmpleados;