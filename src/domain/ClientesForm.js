import { act } from '@testing-library/react';
import './ClientesForm.css';
import { useState } from 'react';

const ClientesForm = ({cliente, actualizarValor }) => {

        const [razonSocial, setRazonSocial]=useState(cliente.razonSocial);

        const actualizarCambio = evt => {
                evt.preventDefault();
                const nuevoValor= evt.target.value;
                console.log("nuevo valor "+nuevoValor);
                setRazonSocial(nuevoValor);
        }
        return (
                <section>
                        <ul class="form-register">
                                <h4>Dar de alta clientes</h4>
                                <li class="controls">
                                        <div class="fifty-fifty"> 
                                        {/* Cuando necesite disponer elementos, encerrar entre divs */}
                <label>Razón social</label>
                                                <input name="razonSocial" value={razonSocial} onChange={actualizarCambio}  />
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
                                        <button type="botons" onClick={()=>actualizarValor(cliente)}>Guardar</button>
                                        <button type="botons">Cancelar</button>
                                        </div>
                                </li>
                        </ul>
                </section>
        )
}

export default ClientesForm;
