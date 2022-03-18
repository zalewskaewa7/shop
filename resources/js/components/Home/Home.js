import React from "react";
import "./home.css";
import image from "../Images/AdobeStock_395741873.jpeg";

function Home() {
    return (
        <div className="home">
            <h1>Witamy w Pasiece Dąbrówka!</h1>
            <img id="image" src={image} alt="honey"></img>
        </div>
    );
}

export default Home;
