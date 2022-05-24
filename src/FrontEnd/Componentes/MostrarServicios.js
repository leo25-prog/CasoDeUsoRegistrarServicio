import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

const data = [
  { id: '', nomServicio: "", dependencia: "", titular: "", 
    puestoTitular: "", telefono: "", nomPrograma: "", cupos: ""},
];

export default class MostrarServicios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      servicios: [], 
      data: data, 
      form: {
        id: '',
        NomServicio: '',
        Dependencia: '',
        Titular: '',
        PuestoTitular: '',
        Telefono: '',
        NomPrograma: '',
        Cupos: ''
      },
      modalEditar: false,
    }; 
  }

  enviarDatos = (e) =>{
    e.preventDefault();
    console.log("Formuario enviado...");
    
    const{id, NomServicio, Dependencia, Titular, PuestoTitular, Telefono, NomPrograma, Cupos} = this.state.form;

    var datosEnvio = {id: id, NomServicio: NomServicio, Dependencia: Dependencia, Titular: Titular,
      PuestoTitular: PuestoTitular, Telefono: Telefono, NomPrograma: NomPrograma, Cupos: Cupos}

    fetch("http://localhost/servinet/?actualizar=1", {
      method: "POST",
      body: JSON.stringify(datosEnvio)
    })
    .then(respuesta => respuesta.json())
    .then((datosRespuesta) => {
      console.log(datosRespuesta);
      this.cargarDatos();
    })
    .catch(console.log)
  }

  handleChange =e=> {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }  
  
  mostrarModalEditar = (registro) => {
    this.setState({form: registro, modalEditar: true});
  }  
  
  ocultarModalEditar = () => {
    this.setState({modalEditar: false});
  }
  
  editar = (dato) =>{
    var con = 0;
    var lista = this.state.data;
    lista.map((registro) => {
      if(dato.id == registro.id){
        lista[con].nomServicio = dato.nomServicio;
        lista[con].dependencia = dato.dependencia;
        lista[con].titular = dato.titular;
        lista[con].puestoTitular = dato.puestoTitular;
        lista[con].telefono = dato.telefono;
        lista[con].nomPrograma = dato.nomPrograma;
        lista[con].cupos = dato.cupos;
      }
      con ++;
    });
    this.setState({data: lista, modalEditar: false});
  }

  borrarRegistros = (id) => {
    console.log(id);
    var opcion = window.confirm("¿Realmente desea eliminar el registro " + id + "?");
    if(opcion){
      fetch("http://localhost/servinet/?borrar=" + id)
      .then(respuesta => respuesta.json())
      .then((datosRespuesta) => {

        console.log(datosRespuesta);
        this.cargarDatos();
      
      })
      .catch(console.log)
    }  
  }

  cargarDatos(){
    fetch("http://localhost/servinet/")
    .then(respuesta => respuesta.json())
    .then((datosRespuesta) => {

      console.log(datosRespuesta);
      this.setState({datosCargados: true, servicios: datosRespuesta, form: datosRespuesta, data: datosRespuesta});
    
    })
    .catch(console.log)
  }

  componentDidMount(){
    this.cargarDatos();
  }

  render(){
    const {datosCargados, servicios, form} = this.state
    
    if(!datosCargados){
      return <div> Cargando...</div>
    }
    else {
      return(
        <>
          <div className="card">
            <div className="card-header">
              <br />
                <Link to = "/registrar-servicios" className="btn btn-success"> Registrar nuevo servicio </Link>
              <br /> <br />
            </div>
            <div className="card-body">
              <h4>Lista de Servicios</h4>
              <br/>
              <Container>
                <Table className = "table table-hover">
                  <thead className = "table table-success">
                    <tr>
                      <th>Id</th>
                      <th>Nombre del Servicio</th>
                      <th>Dependencia</th>
                      <th>Titular</th>
                      <th>Puesto del titular</th>
                      <th>Teléfono</th>
                      <th>Nombre del programa</th>
                      <th>Cupos</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicios.map((elemento)=>(
                      <tr key = {elemento.id}>
                        <td>{elemento.id}</td>
                        <td>{elemento.NomServicio}</td>
                        <td>{elemento.Dependencia}</td>
                        <td>{elemento.Titular}</td>
                        <td>{elemento.PuestoTitular}</td>
                        <td>{elemento.Telefono}</td>
                        <td>{elemento.NomPrograma}</td>
                        <td>{elemento.Cupos}</td>
                        <td>
                          <Button color = "primary" onClick = {() => this.mostrarModalEditar(elemento)}> Editar</Button>
                          {"  "}      
                          <Button color = "danger"  onClick = {() => this.borrarRegistros(elemento.id)}> Eliminar</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </div>
            <div className = "card-footer text-muted">
                Servicio social ITSUR
            </div>
          </div>
        
          
          <Modal isOpen = {this.state.modalEditar}>
            <form onSubmit={this.enviarDatos}>
              <ModalHeader>
                <div>
                  <h3>Editar Servicio</h3>
                </div>
              </ModalHeader>

              <ModalBody>
                <FormGroup>
                  <label>ID:</label>
                  <input name = "id" className = "form-control" readOnly type = "text" value = {form.id}/>
                </FormGroup>

                <FormGroup>
                  <label>Nombre del servicio:</label>
                  <input className = "form-control" name = "NomServicio" type = "text" onChange = {this.handleChange} value = {form.NomServicio} />
                </FormGroup>

                <FormGroup>
                  <label>Dependencia Oficial:</label>
                  <input className = "form-control" name = "Dependencia" type = "text" onChange = {this.handleChange} value = {form.Dependencia} />
                </FormGroup>

                <FormGroup>
                  <label>Titular de la dependencia</label>
                  <input className = "form-control" name = "Titular" type = "text" onChange = {this.handleChange} value = {form.Titular}/>
                </FormGroup>

                <FormGroup>
                  <label>Puesto del titular de la dependencia:</label>
                  <input className = "form-control" name = "PuestoTitular" type = "text" onChange = {this.handleChange} value = {form.PuestoTitular}/>
                </FormGroup>

                <FormGroup>
                  <label>Teléfono</label>
                  <input className = "form-control" name = "Telefono" type = "text" onChange = {this.handleChange} value = {form.Telefono}/>
                </FormGroup>

                <FormGroup>
                  <label>Nombre del programa:</label>
                  <input className = "form-control" name = "NomPrograma" type = "text" onChange = {this.handleChange} value = {form.NomPrograma} />
                </FormGroup>

                <FormGroup>
                  <label>Cupos disponibles en el servicio:</label>
                  <input className = "form-control" name = "Cupos" type = "text" onChange = {this.handleChange} value = {form.Cupos}/>
                </FormGroup>
              
              </ModalBody>
              
              <ModalFooter>
                <Button type = "submit" color = "primary" onClick = {() => this.editar(form)}> Editar datos </Button>
                <Button color = "danger" onClick = {() => this.ocultarModalEditar()}> Cancelar </Button>
              </ModalFooter>  
            </form>
          </Modal>
          
        </>
      );
    }
  }
}

