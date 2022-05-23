import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

const data = [
  { id: 1, nomServicio: "Naruto", dependencia: "Naruto", titular: "Naruto", 
    puestoTitular: "Hokage", telefono: "4451104943", nomPrograma: "Anime", cupos: "100"},
];

export default class MostrarServicios extends React.Component {
state = {
  data: data, 
  form: {
    id: '',
    nomServicio: '',
    dependencia: '',
    titular: '',
    puestoTitular: '',
    telefono: '',
    nomPrograma: '',
    cupos: ''
  },
  modalEditar: false,
}; 

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

eliminar = (dato)=>{
  var opcion = window.confirm("¿Realmente desea eliminar el registro " + dato.id + "?");
  if(opcion){
    var con = 0;
    var lista = this.state.data;
    lista.map((registro) =>{
      if(registro.id == dato.id){
        lista.splice(con, 1);
      }
      con ++;
    });
    this.setState({data: lista});
  }
}

  render(){
    return(
      <>
      <Container>
        <br />
        <Link to = "/registrar-servicios" className="btn btn-success"> Registrar nuevo servicio </Link>
        <br /> <br />
        
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
            {this.state.data.map((elemento)=>(
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.nomServicio}</td>
                <td>{elemento.dependencia}</td>
                <td>{elemento.titular}</td>
                <td>{elemento.puestoTitular}</td>
                <td>{elemento.telefono}</td>
                <td>{elemento.nomPrograma}</td>
                <td>{elemento.cupos}</td>
                <td><Button color = "primary" onClick = {() => this.mostrarModalEditar(elemento)}> Editar</Button>
                    {"  "}
                    <Button color = "danger"  onClick = {() => this.eliminar(elemento)}> Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen = {this.state.modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Servicio</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>ID:</label>
            <input className = "form-control" readOnly type = "text" value = {this.state.form.id}/>
          </FormGroup>

          <FormGroup>
            <label>Nombre del servicio:</label>
            <input className = "form-control" name = "nomServicio" type = "text" onChange = {this.handleChange} value = {this.state.form.nomServicio} />
          </FormGroup>

          <FormGroup>
            <label>Dependencia Oficial:</label>
            <input className = "form-control" name = "dependencia" type = "text" onChange = {this.handleChange} value = {this.state.form.dependencia} />
          </FormGroup>

          <FormGroup>
            <label>Titular de la dependencia</label>
            <input className = "form-control" name = "titular" type = "text" onChange = {this.handleChange} value = {this.state.form.titular}/>
          </FormGroup>

          <FormGroup>
            <label>Puesto del titular de la dependencia:</label>
            <input className = "form-control" name = "puestoTitular" type = "text" onChange = {this.handleChange} value = {this.state.form.puestoTitular}/>
          </FormGroup>

          <FormGroup>
            <label>Teléfono</label>
            <input className = "form-control" name = "telefono" type = "text" onChange = {this.handleChange} value = {this.state.form.telefono}/>
          </FormGroup>

          <FormGroup>
            <label>Nombre del programa:</label>
            <input className = "form-control" name = "nomPrograma" type = "text" onChange = {this.handleChange} value = {this.state.form.nomPrograma} />
          </FormGroup>

          <FormGroup>
            <label>Cupos disponibles en el servicio:</label>
            <input className = "form-control" name = "cupos" type = "text" onChange = {this.handleChange} value = {this.state.form.cupos}/>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color = "primary" onClick = {() => this.editar(this.state.form)}> Editar </Button>
          <Button color = "danger" onClick = {() => this.ocultarModalEditar()}> Cancelar </Button>
        </ModalFooter>
      </Modal>

      </>     
    );
  }
}