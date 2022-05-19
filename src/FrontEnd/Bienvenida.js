import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, MaodalHeader, FormGroup, ModalFooter} from 'reactstrap';
import logoServiNet from '../Imagenes/LogoServiNet.png';

export default class Bienvenida extends React.Component{
    state ={
        click: false,
    }

    mostrarServicios=()=>{
        this.setState({click: !this.state.click});
    }
    
    render() {
        const modalStyles = {
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        return(
            <>
            <div><img src = { <logoServiNet/> }/></div>
            <h1>Servicio social ITSUR</h1>

            <div className = "principal">
                <div className = "secundario">
            <Button color = "success" onClick = {this.mostrarServicios}> Revisar Servicios</Button>
            </div></div>
            
            

            </>
        );
    }
}
