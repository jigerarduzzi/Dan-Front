import "./ClientesResultados.css";
import React from "react";
import CeldaTabla from './Table/CeldaTabla';
import Tabla from './Table/Tabla';
import filasCliente from './Table/FilaTabla';
import EncabezadoTabla from './Table/EncabezadoTabla';


const axios = require("axios");

let listaClientes = [];

const obtener = () => {
  axios({
    url: "http://localhost:9000/api/cliente",
    method: "GET",
    //data: clientes
  })
    .then((resultado) => {
      const nuevaLista = [...listaClientes, resultado.data];
      debugger;

      console.log(nuevaLista[1]);
      //setListaCliente(nuevaLista);
      return nuevaLista;
    })
    .catch((error) => {
      console.error(error);
    });
};

const ClientesResultados = () => {
  return (
    /* <table >


            <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
            </tr>
            <tr>
                <td>Dato 1.1</td>
                <td>Dato 1.2</td>
                <td>Dato 1.3</td>
            </tr>
            <tr>
                <td>Dato 2.1</td>
                <td>Dato 2.2</td>
                <td>Dato 2.3</td>
            </tr>
        </table> */
    <Tabla>
      <EncabezadoTabla>
        <CeldaTabla dato="id" />
        <CeldaTabla dato="razonSocial" />
        <CeldaTabla dato="email" />
      </EncabezadoTabla>
      {filasCliente}
    </Tabla>
  );
};

export default ClientesResultados;
