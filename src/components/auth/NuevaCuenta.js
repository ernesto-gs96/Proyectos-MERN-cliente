import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NuevaCuenta = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: ""
    });

    // Extraer de usuario
    const {nombre, email, password, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("Registrando...");
        
        // Validar que no haya campos vacios

        // Password minimo de 6 caracteres

        // Los 2 passwords son iguales

        // Pasarlos al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre: </label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email: </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password: </label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password: </label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input 
                            type="submit"
                            value="Registrar"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Iniciar seion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;