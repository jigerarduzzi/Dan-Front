import './Clientes.css';

import ClientesForm from './ClientesForm';

const clienteInicial = {
	id:0,
	razonSocial: '-',
	habilitadoOnline: false,
	maxCuentaCorriente:0.0,
};

const Clientes = () => {
    return(
        <div className="box">
            <div><h1>Gestion de clientes</h1></div>
            <div className="panelForm">
                <div className="panelFormAlta">
                    <ClientesForm cliente = {clienteInicial}/>
                    </div>
                <div className="panelFormBusqueda">Busqueda</div>
            </div>
            <div>Listado</div>
        </div>
    )
}


export default Clientes;