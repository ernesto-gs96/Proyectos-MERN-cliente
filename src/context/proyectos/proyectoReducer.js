import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from "../../types"; // es el index.js

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
        default:
            return state;
    }
}