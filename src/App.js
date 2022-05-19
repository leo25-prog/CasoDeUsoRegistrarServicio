import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter,
  Input, Label} from 'reactstrap';
import RegistrarServicio from './FrontEnd/RegistrarNuevoServicio';
import Mostrar from './FrontEnd/MostrarServicios';
import Bienvenida from './FrontEnd/Bienvenida';

function App(){
  return(
    // HACER QUE CAMBIE DE RUTA PRESIONANDO UN BOTON, INICIA EN LA PANTALLA BIENVENIDA 
    //<Button color = "success" onClick = {<Mostrar/>}>Comenzar</Button>
    // LUEGO CON EL BOTON "REVISAR SERVICIOS" SE VA A LA PANTALLA DE MOSTRAR  
    // DEPUES EN MOSTRAR CON EL BOTON AGREGAR SERVICIO SE VA A LA PANTALLA DE AGREGAR SERVICIO
    
    <Router>
      <Routes>
        <Route path = "/" element = { <Bienvenida/> }/> 
        <Route path = "/registrar-servicio" element = { <RegistrarServicio/> }/>       
        <Route path = "/mostrar-servicios" element = { <Mostrar/> }/>
      </Routes>
    </Router>
  );
}

export default App;

