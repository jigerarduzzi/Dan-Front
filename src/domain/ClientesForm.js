import './ClientesForm.css';

const ClientesForm = ({ cliente }) => {
        return (
                <section>
                        <ul class="form-register">
                                <li class="controls">
                                        <div class="fifty-fifty"> 
                                        {/* Cuando necesite disponer elementos, encerrar entre divs */}
                <label>Razón social</label>
                                                <input name="razonSocial" value={cliente.razonSocial} />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <label>Cuit</label>
                                                <input name="cuit" />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <label>Email</label>
                                                <input name="email" />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <label>Max cuenta corriente</label>
                                                <input name="maxCuentaCorriente" value={cliente.maxCuentaCorriente} />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class="fifty-fifty">
                                                <label>Habilitado Online</label>
                                                <input name="habilitadoOnline" type="checkbox" />
                                        </div>
                                </li>
                                <li class="controls">
                                        <div class = "fifty-fifty-botons">
                                        <button type="botons">Guardar</button>
                                        <button type="botons">Cancelar</button>
                                        </div>
                                </li>
                        </ul>
                </section>
        )
}

export default ClientesForm;
