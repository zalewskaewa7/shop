import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./basket.css";

function Basket() {
    return (
        <div className="basket">
            <BsCart4 />
            <a href="/koszyk"> Koszyk</a>
        </div>
    );
}

export default Basket;
