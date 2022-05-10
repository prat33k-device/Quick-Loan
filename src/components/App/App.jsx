import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../LoginPage/Home/Home";
import Secrets from "../LoginPage/Secrets/Secrets";
import "./App.css";
import axios from "axios";
import apiURL from "../../URLs/url";
import { Navigate } from "react-router-dom";
import Profile from "../profile/profile";
import Request from "../request/request";

function App() { 

    return <Fragment>

        <NavBar />

        <Routes>
            
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/secrets" element={<Secrets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/request" element={<Request />} />

        </Routes>
        

    </Fragment>;
}

export default App;