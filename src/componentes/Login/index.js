import React, { useState } from 'react';
const Login = () => {
    const [estaLogado, setEstaLogado] = useState(false)
    function manipulaEventoLogin() {
       setEstaLogado(true);
    }   
    return (
        <div>
            <h3>Login</h3>
            {
            estaLogado && <p>Usuário está logado</p>
            }
            <button onClick={manipulaEventoLogin}>Login</button>
        </div>
    );      
}
export default Login;


