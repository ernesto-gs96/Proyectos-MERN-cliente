import React, {Fragment,useContext} from 'react';
import Tarea from "./Tarea";
// import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTarea = () => {

    // Obtener el State de los proyectos
    // const proyectosContext = useContext(proyectoContext);
    // const {tareasProyecto} = proyectosContext;

    const tareasProyecto = [
        {id: 1, nombre: "Eelgir tecnologías", estado: true},
        {id: 2, nombre: "Eelgir colores", estado: false},
        {id: 3, nombre: "Elegir plataformas", estado: false},
        {id: 4, nombre: "Eelgir Hosting", estado: true}
    ];

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

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
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTarea;