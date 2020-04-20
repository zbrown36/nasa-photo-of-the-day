import React,{ useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.js";


const State = () => {
    const [pic, setPic] = useState ([]);
    useEffect(() => {
        axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=P1sSJGcyuBHpz6QeMLQMoyso1IRZ6DZKTDESdEhs')
        .then(response => {
            console.log(response);
            setPic(response.data);
        })
        .catch(error => console.log("Error!", error));
    }, []);

    return (
        <div className="state">
            <Card pic={pic} />
        </div>
    );
};

export default State;