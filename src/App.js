import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegistrarServicios from './FrontEnd/RegistrarNuevoServicio';
import MostrarServicios from './FrontEnd/MostrarServicios';
import Bienvenida from './FrontEnd/Bienvenida';
import Menu from './FrontEnd/Menu';

export default function App(){
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
