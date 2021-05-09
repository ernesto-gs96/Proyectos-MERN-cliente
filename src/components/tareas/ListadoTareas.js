import React, {Fragment,useContext} from 'react';
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTarea = () => {

    // Obtener el State del proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const {proyectoseleccionado, eliminarProyecto} = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyectoseleccionado){
        return <h2>Selecciona un proyecto</h2>
    }
        

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyectoseleccionado;

    const tareasProyecto = [
        {id: 1, nombre: "Eelgir tecnologías", estado: true},
        {id: 2, nombre: "Eelgir colores", estado: false},
        {id: 3, nombre: "Elegir plataformas", estado: false},
        {id: 4, nombre: "Eelgir Hosting", estado: true}
    ];

    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : (tareasProyecto.map(tarea => (
                    <Tarea
                        tarea={tarea}
                    />
                )))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTarea;