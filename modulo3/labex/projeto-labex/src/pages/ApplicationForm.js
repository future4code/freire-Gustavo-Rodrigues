import React from "react";
import { useNavigate } from "react-router-dom";


const ApplicationForm = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }
    
    return (

        <div>

            <h1>Inscreva-se para uma viagem</h1>

            <button onClick={goBack}>Voltar</button>
            <button >Enviar</button>

        </div>
    )
}

export default ApplicationForm;