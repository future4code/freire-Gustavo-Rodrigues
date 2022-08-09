import React from "react";
import { navigate, useNavigate } from "react-router-dom";

const CreateTripPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/AdminHome")
    }


    return (
        <div>

            <h1>Criar Viagem</h1>

            <button onClick={goBack}>Voltar</button>
            <button type="submit">Criar</button>
        </div>
    )

    
}

export default CreateTripPage;

