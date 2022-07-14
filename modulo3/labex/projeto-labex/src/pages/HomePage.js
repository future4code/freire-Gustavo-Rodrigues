import React from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/ListTrip")
    }

    const goToLoginPage = () => {
        navigate("/LoginPage")
    }
return (
    <div>

    <button onClick={goToListTripsPage}>Ver Viagens</button>

    <button onClick={goToLoginPage}>Admin Área</button>

    </div>

)
}

export default HomePage;