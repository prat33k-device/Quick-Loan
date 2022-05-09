import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {

    const [data, setData] = useState("loading....");

    useEffect(()=>{
        getHomeData();
    }, []);

    async function getHomeData() {
        
        try{
            const res = await axios.get("http://localhost:4000/home")
            console.log(res);
            setData(res.data);
        } catch(err) {
            console.error(err);
        }

    }

    return <h1>{data}</h1>;
}

export default Home;