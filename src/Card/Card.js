import React from "react";
import "./card.css";

const Card = ({ pic }) => {

    return (
        <div className="daily-photo">
            <h1>NASA's Daily Photo for {pic.date}</h1>
            <h2>{pic.title}</h2>
            <img src={pic.url} alt="nasa" width = "400px"></img>
            <div className="lower">
                <p>HD picture:<a href="{pic.hdurl}">{pic.hdurl}</a></p>
                <p>{pic.explanation}</p>
            </div>
        </div>
    );
};

export default Card;