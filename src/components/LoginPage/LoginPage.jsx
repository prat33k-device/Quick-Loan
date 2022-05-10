import React from "react";
import { useState } from "react";
import {Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import apiURL from "../../URLs/url";
import qs from "query-string";

function LoginPage() {

    const [enteredUserName, setUserName] = useState("");
    const [enteredPassword, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            username: enteredUserName, 
            password: enteredPassword
        };

        try {
            const res = await axios({
                method: "post",
                url: apiURL + "/api/authenticate",
                data: qs.stringify(data),
                withCredentials: true              // allows the brower to store cookie
            });
            

            console.log(res);

        } catch(err) {
            console.log(err);
        }

        setUserName("");
        setPassword("");
    }

    function handleChange(event) {
        const val = event.target.value;
        const eventName = event.target.name;

        if(eventName === "username") {
            setUserName(val);
        } else if(eventName === "password") {
            setPassword(val);
        }
    }


    return <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name="username" type="email" value={enteredUserName} onChange={handleChange} />
        <label>Password</label>
        <input name="password" type="password" value={enteredPassword} onChange={handleChange} />
        <button type="submit">Submit !</button>
    </form>;
}

export default LoginPage;