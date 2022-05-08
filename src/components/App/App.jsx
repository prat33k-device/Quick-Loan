import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import "./App.css";

function App() {

    return <Fragment>

        <NavBar />

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="test" element={<h1>Test page</h1>} />

        </Routes>
        
        

    </Fragment>;
}

export default App;