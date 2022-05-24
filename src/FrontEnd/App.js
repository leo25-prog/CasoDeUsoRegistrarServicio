import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegistrarServicios from './Componentes/RegistrarNuevoServicio';
import MostrarServicios from './Componentes/MostrarServicios';
import Bienvenida from './Componentes/Bienvenida';
import Menu from './Componentes/Menu';


function App(){
  return(
    <Router>
      <Routes>
        <Route path = "/" element = { <Menu />}>
          <Route index element = { <Bienvenida /> } /> 
          <Route path = "mostrar-servicios" element = { <MostrarServicios /> }/>
          <Route path = "registrar-servicios" element = { <RegistrarServicios /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
