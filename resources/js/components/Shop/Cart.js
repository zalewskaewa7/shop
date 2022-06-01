import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./Cart.css";

const Cart = (props) => {
    // const quantity = window.localStorage.getItem(
    //     "quantity" + props.product.honeyType
    // );
    const [quantity, setQuantity] = useState(
        window.localStorage.getItem(props.product.honeyType)
    );
    function more() {
        var newQuantity = parseInt(quantity) + 1;
        honeyQuantity(newQuantity);
        props.moreQuantity(props.product.price);
    }
    function less() {
        if (quantity > 0) {
            var newQuantity = parseInt(quantity) - 1;
            honeyQuantity(newQuantity);
            props.lessQuantity(props.product.price);
        }
    }
    function honeyQuantity(newQuantity) {
        setQuantity(newQuantity);
        window.localStorage.setItem(props.product.honeyType, newQuantity);
    }
    function deleteItem(e, quantity) {
        props.deleteItem(props.product, quantity);
    }

    return (
        <div className="cart">
            <div className="cartDescription">
                <div className="deleteIcon" title="usuń">
                    <AiOutlineDelete
                        onClick={(e) => deleteItem(props.product, quantity)}
                    />
                </div>
                <ul>
                    <li className="quantity">
                        <button onClick={(e) => less()}>-</button>
                        <div>{quantity}</div>
                        <button onClick={(e) => more()}>+</button>
                    </li>

                    <li>{props.product.honeyType}</li>
                    <li>{props.product.weight}</li>
                    <li>{props.product.price}zł</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;
