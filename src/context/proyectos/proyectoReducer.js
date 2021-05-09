import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO} 
from "../../types"; // es el index.js

export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true
            }
        
        case OBTENER_PROYECTOS:
            // NOTA: TOMA action como lo que va a tener dispatch en proyectosState por eso proyectos tienen el payload
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,
                proyectoseleccionado: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }
        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyectoseleccionado: null
            }
        default:
            return state;
    }
}