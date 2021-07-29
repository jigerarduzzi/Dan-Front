import './Clientes.css';
import ClientesResultados from './ClientesResultados';
import ClientesForm from './ClientesForm';
import ClientesBusqueda from './ClientesBusqueda'
import { useState } from 'react';

let clienteInicial = { //si no funca cambiar a let
	id:0,
	razonSocial: '-',
	habilitadoOnline: false,
	maxCuentaCorriente:0.0,
};

const Clientes = () => {
    
    const [cliente, setCliente]=useState(clienteInicial);


    const updValor = (v) => setCliente(v);

    return(
        <div className="box">
            <div ><h1 >Gestion de clientes</h1></div>
            <div className="panelForm">
                <div className="panelFormAlta">
                    <ClientesForm cliente = {cliente} actualizarValor={updValor}/>
                    </div>
                <div className="panelFormBusqueda">

                    <ClientesBusqueda cliente = {clienteInicial}/>
                
                </div>
            </div>

            <div>
                <ClientesResultados/>     
            </div>

        </div>
    )
}


export default Clientes;