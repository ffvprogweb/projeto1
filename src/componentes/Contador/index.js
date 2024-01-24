import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    const resetarContador = () => {
        setContador(0);
    };

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={resetarContador}>Reset</button>
        </div>
    );
};
export default Contador;

