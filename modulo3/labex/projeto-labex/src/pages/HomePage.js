import React from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripsPage = () => {
        navigate("/ListTrips")
    }

    const goToAdminHomePage = () => {
        navigate("/AdminHome")
    }
return (
   

    <button onClick={goToListTripsPage}>Ver Viagens</button>

)
}

export default HomePage;