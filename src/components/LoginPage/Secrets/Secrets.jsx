import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiURL from "../../../URLs/url";

function Secrets() {
    const [data, setData] = useState("loading....");

    useEffect(()=>{
        getHomeData();
    }, []);

    async function getHomeData() {

        try{
            const res = await axios({
                method: "get",
                url: apiURL + "/secrets",
                withCredentials: true                       //allows the brower to store cookie
            });
            console.log(res);
            setData(res.data);
        } catch(err) {
            console.error(err);
        }

    }

    return <h1>{data}</h1>;
}

export default Secrets;