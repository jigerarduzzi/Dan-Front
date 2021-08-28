import './Clientes.css';
import ClientesResultados from './ClientesResultados';
import ClientesForm from './ClientesForm';
import ClientesBusqueda from './ClientesBusqueda';

import React, {useState,useEffect} from 'react';
import axios from "axios";

let clienteInicial = { //si no funca cambiar a let
	id:0,
	razonSocial: '-',
	habilitadoOnline: false,
	maxCuentaCorriente:0.0,
};

const filtroInicial = {
    selector: '',
    valor:'',
};



const Clientes = () => {
   
 
    const [cliente, setCliente]=useState(clienteInicial);
    const [filtro, setFiltro]=useState(filtroInicial);


    const updValor = (v) => setCliente(v);
    const updFiltro = (v) => setFiltro(v);

    
  /*  const getClientesData = async () => {
        switch (filtro.selector){
            case "Cuit": {
                path={url};
                console.log(url);
            }
            default: return path= "";
        }

 
        axios({
                url: "",
                method: "GET",
                //data: clientes
              })
                .then((resultado) => {
                  const nuevaLista = [...listaClientes, resultado.data];
            
                  console.log(nuevaLista);
                  //setListaCliente(nuevaLista);
                  return nuevaLista;
                })
                .catch((error) => {
                  console.error(error);
                });
    };



    useEffect(() => {
        getClientesData();
    }, []);*/



    return(
        <div className="box">
            <div ><h1 >Gestion de clientes</h1></div>
            <div className="panelForm">
                <div className="panelFormAlta">
                    <ClientesForm cliente = {cliente} actualizarValor={updValor}/>
                    </div>
                <div className="panelFormBusqueda">

                    <ClientesBusqueda filter = {filtro} actualizarFiltro={updFiltro}/>
                
                </div>
            </div>

            <div>
                <ClientesResultados/>     
            </div>

        </div>
    )
}


export default Clientes;