import React from "react";

const Cart = (props) => {
    var quantity = props.quantity;

    return (
        <div className="imageDiv">
            <div className="honeyDescription">
                <ul>
                    <li>
                        ilość:{" "}
                        <input
                            type="number"
                            min="0"
                            className="inputQuantityJars"
                            defaultValue={props.product.quantity}
                        ></input>
                        {props.product.quantity}
                    </li>
                    <li>{props.product.honeyType}</li>
                    <li>{props.product.weight}</li>
                    <li>{props.product.price}</li>
                    <li>Wysyłka 24h</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;
