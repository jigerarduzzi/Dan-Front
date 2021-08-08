import React from 'react';

const EmitirOrden = () => {
    return(

        <ul class="form-register">
            
            <h4 id ="myh4">Crear Orden</h4>
            <input class="controls" type="text" placeholder="Material"/>
            <input class="controls" type="float" placeholder="Cantitad"/>
            <select class="select" name="Proveedor">
                <option value="value1">Proveedor 1</option>
                 <option value="value2" selected>Proveedor 2</option>
            </select>
            <input class="botons" type="submit" value="Enviar"/>
        </ul>

    )
}

export default EmitirOrden;