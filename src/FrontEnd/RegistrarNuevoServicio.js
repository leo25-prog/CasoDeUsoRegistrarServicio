import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom';

const estiloDeVentana = {
    position: "absolute",
    top: '65%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

var argumento;

export default function RegistrarServicio (){
        return (
            <>
            <FormGroup>
                <h1>Registrar Nuevo Servicio</h1>
                <br/>

                <FormGroup>
                    <Label>ID:</Label> 
                    <Input type = "text" id = "usuario"/>
                </FormGroup>

                <FormGroup>
                    <Label>Nombre del servicio:</Label> 
                    <Input type = "text" id = "usuario"/>
                </FormGroup>

                <FormGroup>
                    <Label>Dependencia oficial:</Label>
                    <Input type = "text" id = "password"/>
                </FormGroup>

                <FormGroup>
                    <Label>Titular de la dependencia:</Label>
                    <Input type = "text" id = "password"/>
                </FormGroup>

                <FormGroup>
                    <Label>Puesto del titular en la dependencia:</Label>
                    <Input type = "text" id = "password"/>
                </FormGroup>

                <FormGroup>
                    <Label>Télefono:</Label>
                    <Input type = "text" id = "password"/>
                </FormGroup>

                <FormGroup>
                    <Label>Nombre del programa:</Label>
                    <Input type = "text" id = "password"/>
                </FormGroup>

                <FormGroup>
                    <Label>Cupos disponibles en el servicio:</Label>
                    <Input type = "text" id = "password"/>
                </FormGroup>
            
                <Button color = "primary"> Guardar registro </Button>
                {" "}
                <Link to = "/mostrar-servicios" className="btn btn-danger"> Regresar </Link>
            </FormGroup>
            </>
        )
}