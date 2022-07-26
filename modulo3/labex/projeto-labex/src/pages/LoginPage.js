import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/2")
    }

    const goToAdminHomePage = () => {
        navigate("/AdminHome")
    }
    
    return (

        <div>

            <h1>Login</h1>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goToAdminHomePage} >Entrar</button>

        </div>
    )
}

export default LoginPage;