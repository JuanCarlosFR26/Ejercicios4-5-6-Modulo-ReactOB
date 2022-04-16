import React from 'react';

const Persona = () => {

    const personaNueva = {
        fecha: new Date(),
        nombre: 'Martín',
        edad: 0,
        apellidos: 'San José'
    }

    return (
        <div>
            <h2>
                Hora Actual: { personaNueva.fecha.toLocaleTimeString() }
            </h2>
            <h3>{ personaNueva.nombre } { personaNueva.apellidos }</h3>
            <h1>Edad: { personaNueva.edad }</h1>
        </div>
    );
}

export default Persona;
