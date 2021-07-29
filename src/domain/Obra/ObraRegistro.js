
import './ObraRegistro.css';

const ObraRegistro = () => {
    return(
        <div className="center">
        <ul class="form-register" >
            <h4>Ingrese los datos de la obra</h4>
            <div class="asd">
             <input id="latlong" type="float" maxlength="10" placeholder="Latitud"></input>
             <input id="latlong" type="float" maxlength="10" placeholder="Longitud"></input>
             <input id="latlong" type="float" maxlength="10" placeholder="Superficie"></input>
            </div>
            <input class="controls" type="float"  placeholder="Cliente"></input>
            <input  class="controls" type="text" maxlength="20" placeholder="Dirección"></input>
            <textarea class ="controls" name="description" rows="10" cols="40" placeholder="Descripción"></textarea>
            <button class="botons">Guardar</button>
        </ul>
        </div>
    )
}

export default ObraRegistro;