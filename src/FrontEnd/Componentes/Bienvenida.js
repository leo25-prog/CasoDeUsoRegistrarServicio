import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup } from 'reactstrap';

const estiloDeVentana = {
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const centrar = {
    position: "absolute",
    top: '120%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

export default class Bienvenida extends React.Component{    
    render() {
        return(
            <>
            <FormGroup style={estiloDeVentana}>
                <br/>
                <h1>Bienvenido al apartado de servicio</h1>
                <h1 style={centrar}>social "ITSUR"</h1>
            </FormGroup>
            </>
        );
    }
}
