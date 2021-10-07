import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FormEmpleados, { TablaEmpleados } from '../Empleados';
import Header from '../Header';

const urlBase = "https://localhost:44394";
const empleadoDefault = {
    empleadoId: '',
    codigo: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    fechaNacimiento: '',
    puestoId: '',
    direccion: ''
}

const App = () => {
    const [empleados, setEmpleados] = useState([]);
    const [puestos, setPuestos] = useState([]);
    const [empleado, setEmpleado] = useState({ ...empleadoDefault });

    const [tipoAccion, setTipoAccion] = useState("crear");

    useEffect(() => {
        getEmpleados();
        getPuestos();
    }, []);

    const getEmpleados = async () => {
        try {
            const reponse = await axios.get(`${urlBase}/api/empleados`);

            const empleados = await reponse.data;

            setEmpleados(empleados);
        } catch (err) {
            console.log("Ocurrio un error", err);
        }
    }

    const crearEmpleadoShow = () => {
        setTipoAccion("crear");
        setEmpleado({ ...empleadoDefault });
    }

    const crearEmpleado = async e => {
        e.preventDefault();

        try {
            delete empleado.id;
            const response = await axios.post(`${urlBase}/api/empleados`, empleado);

            if (response.status !== 200) {
                throw response
            }
            await getEmpleados();
            await handleLimpiarForm();
            alert("empleado creado exitosamente");
        } catch (err) {
            console.log("Ocurrio un error", err);
            console.log("data", err.data);

        }
    }

    const editarEmpleadoShow = (emp) => {
        setTipoAccion("editar");
        setEmpleado({ ...emp });
    }

    const editarEmpleado = async e => {
        e.preventDefault();

        try {
            const response = await axios.put(`${urlBase}/api/empleados`, empleado);

            if (response.status !== 200) {
                throw response
            }
            await getEmpleados();
            await handleLimpiarForm();
            alert("empleado actualizado exitosamente");
        } catch (err) {
            console.log("Ocurrio un error", err);
            console.log("data", err.data);

        }
    }

    const eliminarEmpleadoShow = (emp) => {
        setTipoAccion("eliminar");
        setEmpleado({ ...emp });
    }

    const eliminarEmpleado = async e => {
        e.preventDefault();

        try {
            const response = await axios.delete(`${urlBase}/api/empleados/${empleado.empleadoId}`);

            if (response.status !== 200) {
                throw response
            }
            await getEmpleados();
            await handleLimpiarForm();
            alert("empleado eliminado exitosamente");
        } catch (err) {
            console.log("Ocurrio un error", err);
            console.log("data", err.data);

        }
    }

    const getPuestos = async () => {
        try {
            const reponse = await axios.get(`${urlBase}/api/puestos`);

            const puestos = await reponse.data;

            setPuestos(puestos);
        } catch (err) {
            console.log("Ocurrio un error", err);
        }
    }

    const handleChangeForm = async e => {
        await setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value
        });
    }

    const handleLimpiarForm = async () => {
        setTipoAccion("crear");
        setEmpleado({ ...empleadoDefault });
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col className="mx-auto" xs={12} sm={12} md={8} lg={8} >
                        <FormEmpleados
                            lstPuestos={puestos}
                            handleChangeForm={handleChangeForm}
                            handleCrear={crearEmpleado}
                            handleEditar={editarEmpleado}
                            handleEliminar={eliminarEmpleado}
                            empleado={empleado}
                            handleLimpiarForm={handleLimpiarForm}
                            tipoAccion={tipoAccion}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-auto my-3" xs={12} sm={12} md={12} lg={12} >
                        <Button variant="primary" type="button" onClick={() => crearEmpleadoShow()}>
                            Nuevo <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-auto mt-3" xs={12} sm={12} md={12} lg={12} >
                        <TablaEmpleados
                            lstEmpleados={empleados}
                            editarEmpleadoShow={editarEmpleadoShow}
                            eliminarEmpleadoShow={eliminarEmpleadoShow}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;