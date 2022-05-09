import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Secrets() {
    const [data, setData] = useState("loading....");

    useEffect(()=>{
        getHomeData();
    }, []);

    async function getHomeData() {
        
        try{
            const res = await axios.get("http://localhost:4000/secrets")
            console.log(res);
            setData(res.data);
        } catch(err) {
            console.error(err);
        }

    }

    return <h1>{data}</h1>;
}

export default Secrets;