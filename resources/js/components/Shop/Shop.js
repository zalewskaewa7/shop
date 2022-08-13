import React from "react";
import axios from "axios";
import Cart from "./Cart";
import Basket from "./Basket";

import "./Shop.css";

import { createBrowserHistory } from "history";
import ProductAdded from "./ProductAdded";

const history = createBrowserHistory();
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            cartElements: [],

            quantity: 1,
            totalPrice: 0,
        };
    }

    componentDidMount() {
        axios.get("/api/apiary").then((response) => {
            this.setState({ datas: response.data });
        });
    }

    render() {
        return (
            <div className="imgagesBox">
                {this.state.datas.map((row, index) => {
                    return (
                        <div key={row.id} id={index} className="imageDiv">
                            <img
                                className="image"
                                src={"../Images/" + row.imageName}
                                alt="honeyJar"
                            ></img>
                            <div className="honeyDescription">
                                <ul>
                                    <li>{row.honeyType}</li>
                                    <li>{row.weight}</li>
                                    <li>{row.price}zł</li>
                                </ul>
                                <div className="quantityDiv">
                                    ilość:
                                    <input
                                        id={row.imageName}
                                        type="number"
                                        min="0"
                                        className="inputQuantityJars"
                                        onChange={(e) => {
                                            this.props.quantityJars(e);
                                        }}
                                        defaultValue={1}
                                    ></input>
                                </div>
                                <div>Wysyłka 24h</div>
                                <button
                                    className="toBasket"
                                    onClick={() =>
                                        this.props.addToShoppingCart(row)
                                    }
                                >
                                    Do koszyka
                                </button>
                            </div>
                        </div>
                    );
                })}

                {this.props.productAdded ? <ProductAdded /> : <></>}
            </div>
        );
    }
}

export default Shop;
