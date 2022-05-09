import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import Home from "../LoginPage/Home/Home";
import Secrets from "../LoginPage/Secrets/Secrets";
import "./App.css";

function App() {

    return <Fragment>

        <NavBar />

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="test" element={<h1>Test page</h1>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/secrets" element={<Secrets />} />

        </Routes>
        
        

    </Fragment>;
}

export default App;