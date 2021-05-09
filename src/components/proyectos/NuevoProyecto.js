import React, {Fragment, useContext, useState} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

    // Obtener el State del formulario
    const proyectosContext = useContext(proyectoContext);
    const {
        formulario,
        errorformulario, 
        mostrarFormulario, 
        agregarProyecto,
        mostrarError
    } = proyectosContext;

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
        if(nombre === ""){
            mostrarError();
            return;
        }
        // Agregar State
        agregarProyecto(proyecto);
        // Renicia form
        guardarProyecto({
            nombre: ""
        });
        
    }

    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>

            {formulario
            ?
            (<form
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

            </form>)
            : null}
            {errorformulario 
            ? (<p className="mensaje error">El nombre del proyecto es obligatorio</p>)
            : null
            }
        </Fragment>
    );
}
 
export default NuevoProyecto;