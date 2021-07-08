import './ClientesBusqueda.css';

const ClientesBusqueda = ({cliente}) => {
        return (
                <section>
                        <ul class="form-register">
                                <li class="controls">
                                <h4>Búsqueda de clientes</h4>
                                        <div class="fifty-fifty"> 
                                        {/* Cuando necesite disponer elementos, encerrar entre divs */}
                                                <input name="razonSocial" placeholder="Filtro 1" />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <input name="cuit" placeholder="Filtro 2" />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <input name="email" placeholder = "Filtro 3"/>
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <input name="maxCuentaCorriente" placeholder = "Filtro 4" />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class = "fifty-fifty-botons">
                                        <button type="botons">Buscar</button>
                                        </div>
                                </li>
                        </ul>
                </section>
        )
}

export default ClientesBusqueda;
