import React from 'react';
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: "Front-end"},
        {nombre: "BD"},
        {nombre: "Back-end"}
    ];

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto 
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}
 
export default ListadoProyectos;