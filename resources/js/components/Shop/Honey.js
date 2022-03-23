import React from "react";

function Honey() {
    return (
        <div className="imageDiv">
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
    );
}

export default Honey;
