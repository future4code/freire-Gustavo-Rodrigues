import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminHomePage from "../pages/AdminHomePage";
import ApllicationForm from "../pages/ApplicationForm";
import CreateTripPage from "../pages/CreateTripPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ListTripsPage from "../pages/ListTripsPage";


export const Router = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route  index element = {<HomePage />}/>
                <Route path="AdminHome" element = {<AdminHomePage />} />
                <Route path="Application" element = {<ApllicationForm />} />
                <Route path="CreateTrip" element = {<CreateTripPage />} />
                <Route path="ListTrip" element = {<ListTripsPage />} />
                <Route path="LoginPage" element = {<LoginPage />} />
                <Route path="TripDetails" element = {<TripDetailsPage />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}