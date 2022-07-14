import React from "react"
import { useNavigate } from "react-router-dom"


const AdminHomePage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

    const goToCreateTripPage = () => {
        navigate("/CreateTrip")
    }

    const goToLoginPage = () => {
        navigate("/LoginPage")
    }

    return (

        <div>

            <h1>Cria sua Lista de viagem</h1>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goToLoginPage}>Sair</button>


        </div>
    )
}

export default AdminHomePage