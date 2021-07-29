import logo from './logo.svg';
import './App.css';
import Clientes from'./domain/Clientes'
import Login from'./domain/Login'
import ObraRegistro from './domain/Obra/ObraRegistro';
import MainEmployee from './domain/Main/MainEmployee';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

        <Route path ="/">
          <Login></Login>
        </Route>

      </Switch>

    </Router>
 
    

  );
}

export default App;
