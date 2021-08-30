import './MainEmployee.css';
import React from 'react';

const Main = () => {
    return(
        <div className="fondo">
        <div className="center">
            <a className="without-background" href="/clientes"><img src="https://image.flaticon.com/icons/png/512/1256/1256650.png" class="smaller-image" ></img></a>
            <a className="without-background" href="/productos"><img src="https://image.flaticon.com/icons/png/512/2421/2421989.png" class="smaller-image"></img></a>
            <a className="without-background" href="/obraRegistro"><img src="https://image.flaticon.com/icons/png/512/479/479345.png" class="smaller-image"></img></a>
            <a className="without-background" href="/pagoRegistro"><img src="https://image.flaticon.com/icons/png/512/1019/1019607.png" class="smaller-image"></img></a>
            <a className="without-background" href="/pedidoEmpleado"><img src="https://image.flaticon.com/icons/png/512/3143/3143218.png" class="smaller-image"></img></a>
            <a className="without-background" href="http://google.com"><img src="https://image.flaticon.com/icons/png/512/988/988101.png" class="smaller-image"></img></a>
        </div>
        </div>
        
    )
}

export default Main;