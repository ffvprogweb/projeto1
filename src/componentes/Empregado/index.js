import React, { useState } from 'react';
const Empregado = () => {
    const [empregado, setEmpregado] = useState({ 
        nome: 'Jose', 
        sobrenome: 'Silva' 
    });
    function atualizarEmpregado() {
        setEmpregado({
            nome: 'Maria',
            sobrenome: 'Santos'
        });
    }
    return (
        <div>
            <h3>Empregado</h3>
            <p> Nome: {empregado.nome}</p>
            <p>Sobrenome: {empregado.sobrenome}</p>
            <button onClick={atualizarEmpregado}>Atualizar</button>
        </div>
    );
};
export default Empregado;


