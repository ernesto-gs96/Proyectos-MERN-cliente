import React, {useReducer} from 'react';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from "../../types"; // es el index.js

const ProyectoState = props => {

    // Esto simula la base de datos
    const proyectos = [
        {id: 1, nombre: "Front-end"},
        {id: 2, nombre: "BD"},
        {id: 3, nombre: "Back-end"}
    ];

    const initialState = {
        proyectos: [],
        formulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // NOTA: TOMA Diaspatch como lo que va a tener action en proyectoReducer
    // NOTA: Toda función, objeto, variable del state pasalo al Provider

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        });
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;