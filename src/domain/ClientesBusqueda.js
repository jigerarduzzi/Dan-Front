import './ClientesBusqueda.css';
import React, {useState,useEffect} from 'react';

import axios from "axios";

/*const obtener = () => {
      axios({
          url: "http://localhost:9000/api/cliente",
          method: "GET",
          //data: clientes
        })
          .then((resultado) => {
            const nuevaLista = [...listaClientes, resultado.data];
            debugger;
      
            console.log(nuevaLista);
            //setListaCliente(nuevaLista);
            return nuevaLista;
          })
          .catch((error) => {
            console.error(error);
          });
};*/




const ClientesBusqueda = ({filter,actualizarFiltro}) => {
        const [filtro, setFiltro]= useState(filter.valor);
        const [selector, setSelector]= useState(filter.selector);
        const [path,setPath] = useState("");
       
        let listaClientes = [];
     
        const sitio="localhost";
        const puerto= '3000';
        const clienteUrl= 'api/cliente';

        const getClientesData = async () => {
               /*
                switch(selector){
                        case 'Cuit':{
                                path={sitio};
                                console.log(path);
                        }
                        case 'ID':{
                                path={sitio};
                                console.log(path);
                        }
                        case 'RazonSocial':{
                                path={sitio};
                                console.log(path);
                        }
                        case 'Todos':{
                                path={sitio};
                                console.log(path);
                        }
                }*/
        
                axios({
                        url: path+filtro,
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

        const actualizarFilt = evt => {
                evt.preventDefault();
                const nuevoValor= evt.target.value;
                console.log("nuevo valor filtro "+nuevoValor);
                setFiltro(nuevoValor);

        }
        
        const actualizarSelector = evt => {
                debugger;
                evt.preventDefault();
                const nuevoValor= evt.target.value;
                setSelector(nuevoValor);
                
                switch(nuevoValor){
                        case "Cuit":{
                                setPath("http://localhost:9000/api/cliente/obtenerCliente/");
                                console.log(path);
                                break;
                        }
                        case "ID":{
                                setPath("http://localhost:9000/api/cliente/");
                                console.log(path);
                                break;
                        }
                        case "RazonSocial":{
                                setPath("http://localhost:9000/api/cliente/obtenerCliente?razonSocial=");
                                console.log(path);
                                break;
                        }
                        case "Todos":{
                                setPath("http://localhost:9000/api/cliente");
                                console.log(path);
                        }
                }
        }

        return (
                <section>
                        <ul class="form-register">
                        <h4>Búsqueda de clientes</h4>

                                <li class="controls">
                                <select class="select" name="Filtro" value={selector} onChange={actualizarSelector}>
                                            <option value="Cuit">Cuit</option>
                                              <option value="ID" selected>ID</option>
                                              <option value="RazonSocial" selected>Razón Social</option>
                                              <option value="Todos" selected>Mostrar todos</option>
                                          </select>
                                        <div class="fifty-fifty"> 
                                        {/* Cuando necesite disponer elementos, encerrar entre divs */}
                                                <input name="value filter" value={filtro} placeholder="Ingrese valor" onChange={actualizarFilt}/>
                                        </div>
                                </li>
                                <button type="botons" onClick={getClientesData}>Buscar</button>
                        </ul>
                </section>
        )
}

export default ClientesBusqueda;
