import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {FormGroup, Table} from 'reactstrap';
import Logo from './Imagenes/LogoServiNet.png'

class menu extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
            <>
            <Table className="table table-sm">
                <thread>
                    <tr className = "bg-dark">
                        <th><img src = {Logo} /></th>
                        <th><Link to = "/" className="btn btn-light"> Bienvenida </Link></th>
                        <th><Link to = "/mostrar-servicios" className="btn btn-light"> MostrarServicios </Link></th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <Outlet />
                    </tr>
                </tbody>
            </Table>
            </>
        )
    }
}

export default menu;