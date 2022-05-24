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


export default class RegistrarServicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nomServicio: '',
            dependencia: '',
            titular: '',
            puestoTitular: '',
            telefono: '',
            nomPrograma: '',
            cupos: ''
        }
    }

    cambioValor = (e) => {
        const state = this.state;
        state [e.target.name] = e.target.value; 
        this.setState({state});
    }

    enviarDatos = (e) =>{
        window.confirm("Registro guardado correctamente");
        
        e.preventDefault();
        console.log("Formuario enviado...");

        const{nomServicio, dependencia, titular, puestoTitular, telefono, nomPrograma, cupos} = this.state;

        var datosEnvio = {nomServicio: nomServicio, dependencia: dependencia, titular: titular,
                           puestoTitular: puestoTitular, telefono: telefono, nomPrograma: nomPrograma, cupos: cupos}

        fetch("http://localhost/servinet/?insertar=1", {
            method: "POST",
            body: JSON.stringify(datosEnvio)
        })
        .then(respuesta => respuesta.json())
        .catch(console.log)

        //this.props.history.push("/mostrar-servicios");
    }

    render(){

        const{nomServicio, dependencia, titular, puestoTitular, telefono, nomPrograma, cupos} = this.state;

        return (
            <>
            <FormGroup>
                <br/>
                <h1>Registrar Nuevo Servicio</h1>
                <br/>
                
                <form onSubmit = {this.enviarDatos}>

                    <FormGroup>
                        <Label >Nombre del servicio:</Label> 
                        <Input size = "10%" type = "text" name = "nomServicio" id = "nomServicio" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {nomServicio} onChange = {this.cambioValor}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Dependencia oficial:</Label>
                        <Input type = "text" name = "dependencia" id = "dependencia" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {dependencia} onChange = {this.cambioValor}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Titular de la dependencia:</Label>
                        <Input type = "text" name = "titular" id = "titular" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {titular} onChange = {this.cambioValor}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Puesto del titular en la dependencia:</Label>
                        <Input type = "text" name = "puestoTitular" id = "puestoTitular" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {puestoTitular} onChange = {this.cambioValor}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Télefono:</Label>
                        <Input type = "text" name = "telefono" id = "telefono" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {telefono} onChange = {this.cambioValor}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Nombre del programa:</Label>
                        <Input type = "text" name = "nomPrograma" id = "nomPrograma" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {nomPrograma} onChange = {this.cambioValor}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Cupos disponibles en el servicio:</Label>
                        <Input type = "text" name = "cupos" id = "cupos" className = "form-control" 
                                placeholder = "" aria-describedby='' value = {cupos} onChange = {this.cambioValor}/>
                    </FormGroup>
                
                    <Button type = "submit" color = "primary"> Guardar registro </Button>
                    {" "}
                    <Link to = "/mostrar-servicios" className="btn btn-danger"> Regresar </Link>
                </form>
            </FormGroup>
            </>
        );
    }
}