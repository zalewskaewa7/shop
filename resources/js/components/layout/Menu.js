import React from "react";
import Basket from "./Basket";
import Navigation from "./Navigation";
import "./menu.css";

function Menu() {
    return (
        <div id="menu">
            <Navigation />
            <Basket />
        </div>
    );
}

export default Menu;
