import logo from './logo.svg';
import './App.css';
import Clientes from'./domain/Clientes'
import Login from'./domain/Login'
import ObraRegistro from './domain/Obra/ObraRegistro';
import MainEmployee from './domain/Main/MainEmployee';
import Producto from './domain/Producto/Producto';
import Pedido from './domain/Pedido/PedidoEmpleado';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PedidoEmpleado from './domain/Pedido/PedidoEmpleado';
import PagoRegistro from './domain/Pago/PagoRegistro';

function App() {
  return (

    <Router>

      <Switch>

        <Route path="/mainEmpleado">
          <MainEmployee></MainEmployee>
        </Route>

        <Route path="/clientes">
          <Clientes></Clientes>
        </Route>

        <Route path="/obraRegistro">
          <ObraRegistro></ObraRegistro>
        </Route>

        <Route path="/productos">
          <Producto></Producto>
        </Route>

        <Route path="/pedidoEmpleado">
          <PedidoEmpleado></PedidoEmpleado>
        </Route>

        <Route path="/pagoRegistro">
          <PagoRegistro></PagoRegistro>
        </Route>

        <Route path ="/">
          <Login></Login>
        </Route>

      </Switch>

    </Router>
 
    

  );
}

export default App;
