import React from "react";
import image2 from "../Images/20220320_223839.jpg";
import image3 from "../Images/20220320_223856.jpg";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";

import "./Shop.css";
function Shop() {
    const [honey, setHoney] = "";
    function addToShoppingCart() {
        var jarOfHoney = document.getElementById("limeHoney");

        console.log(jarOfHoney);
    }
    return (
        <div className="imgagesBox">
            {honey}
            <div className="imageDiv" id="limeHoney">
                <img className="image" src={image3} alt="honeyJar"></img>
                <div className="honeyDescription">
                    <ul>
                        <li>Miód lipowy </li>
                        <li>słoik 1,2kg</li>
                        <li>30zł</li>
                        <li>Wysyłka 24h</li>
                        <li className="toBasket" onClick={addToShoppingCart}>
                            Do koszyka
                        </li>
                    </ul>
                </div>
            </div>
            <div className="imageDiv">
                <img className="image" src={image2} alt="honeyJar"></img>
                <div className="honeyDescription">
                    <ul>
                        <li>Miód gryczany </li>
                        <li>słoik 1,2kg</li>
                        <li>40zł</li>
                        <li>Wysyłka 24h</li>
                        <li className="quantityLi">
                            <AiFillMinusSquare /> <input></input>
                            <AiFillPlusSquare />
                        </li>
                        <li className="toBasket" onClick={addToShoppingCart}>
                            Do koszyka
                        </li>
                    </ul>
                </div>
            </div>
            <div className="imageDiv">
                <img className="image" src={image3} alt="honeyJar"></img>
                <div className="honeyDescription">
                    <ul>
                        <li>Miód wielokwiatowy </li>
                        <li>słoik 1,2kg</li>
                        <li>30zł</li>
                        <li>Wysyłka 24h</li>
                        <li className="toBasket" onClick={addToShoppingCart}>
                            Do koszyka
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Shop;
