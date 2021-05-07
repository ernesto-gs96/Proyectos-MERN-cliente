import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

    // State de Proyecto 
    const [proyecto, guardarProyecto] = useState({
        nombre: ""
    });

    // Extrer nombre de proyecto
    const {nombre} = proyecto;

    // Lee el contenido de los inputs
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    // Cuando envia un proyecto el usuario
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar campo del proyecto

        // Agregar State

        // Renicia form
        
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >

                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                ></input>

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                ></input>

            </form>
        </Fragment>
    );
}
 
export default NuevoProyecto;