import './Login.css';

const Login = () => {
    return(
       <div className="center">
        <ul class="form-register">
            
            <h4 id ="myh4">Iniciar sesión</h4>
            <input class="controls" type="text" placeholder="Usuario"/>
            <input class="controls" type="text" placeholder="*******"/>
            <select class="select" name="Tipo de usuario">
                <option value="value1">Cliente</option>
                 <option value="value2" selected>Empleado</option>
            </select>
            <input class="botons" type="submit" value="ingresar"/>
        </ul>
        </div>
    )
}

export default Login;