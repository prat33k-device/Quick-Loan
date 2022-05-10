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
        <div id='login-center'>
       <div id='login-box'>
           <div id='choose-login-option' className='sep'>
               <div><button id="login-buttons">Register</button></div>
               <div><button id="login-buttons"  type="submit">Login</button></div>
           </div>
           <div className='hor-sep'>
               <label>Username</label>
               <input id="login-input-buttons" type="email" name='username' value={enteredUserName} onChange={handleChange}></input>
           </div>
           <div className='hor-sep'>
               <label>Password</label>
               <input id="login-input-buttons" type="password" name='password' value={enteredPassword} onChange={handleChange}></input>
           </div>

       </div>
    </div>
    </form>;
}

export default LoginPage;