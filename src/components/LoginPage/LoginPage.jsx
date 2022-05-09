import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {

    return <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/secrets">Secrets</Link></li>
    </ul>
}

export default LoginPage;