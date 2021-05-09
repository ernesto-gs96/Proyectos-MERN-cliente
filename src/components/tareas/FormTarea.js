import React, {useContext} from 'react';
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
    // Obtener el State del proyecto actual
    const proyectosContext = useContext(proyectoContext);
    const {proyectoseleccionado} = proyectosContext;

     // Si no hay proyecto seleccionado
     if(!proyectoseleccionado){
        return null
    }
        
    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyectoseleccionado;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTarea;