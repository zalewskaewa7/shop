import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./basket.css";
import { Link } from "react-router-dom";

function Basket() {
    return (
        <div className="basket">
            <BsCart4 />
            <Link to="/koszyk"> Koszyk</Link>
        </div>
    );
}

export default Basket;
