import React, { useEffect } from 'react';
import Persona from './Persona';

const Ciclocompleto = () => {

    useEffect(() => {
        <Persona></Persona>
        const nuevoComponente = setInterval(() => {

        }, 1000);
        return () => {
            clearInterval(nuevoComponente)
        };
    }, []);

    return (
        <div>
            <Persona></Persona>
        </div>
    );
}

export default Ciclocompleto;
