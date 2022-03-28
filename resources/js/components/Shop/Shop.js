import React from "react";
import axios from "axios";
import Cart from "./Cart";

import "./Shop.css";
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            cartElements: [],
            honeyType: "",
            weight: "",
            price: "",
            quantity: 0,
        };
        // this.addJar = this.addJar.bind(this);
    }
    componentDidMount() {
        axios.get("/api/apiary").then((response) => {
            this.setState({ datas: response.data });
        });
        this.setState({ honeyType: "" });
        this.setState({ weight: "" });
        this.setState({ price: "" });
        this.setState({ quantity: 1 });
    }

    quantityJars(e) {
        console.log(e.target.value);
        this.setState({ quantity: e.target.value });
    }

    addToShoppingCart(row) {
        const item = {
            id: Math.random(),
            quantity: this.state.quantity,
            honeyType: row.honeyType,
            weight: row.weight,
            price: row.price,
        };
        const newProduct = [item, ...this.state.cartElements];
        this.setState({ cartElements: newProduct });
        this.setState({ quantity: 0 });
    }

    render() {
        const cartProducts = this.state.cartElements.map((e) => {
            return <Cart key={e.id} product={e} />;
        });

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
                                    <li>{row.price}</li>
                                </ul>
                                <div className="quantityDiv">
                                    ilość:
                                    <input
                                        id={row.imageName}
                                        type="number"
                                        min="0"
                                        className="inputQuantityJars"
                                        onChange={(e) => {
                                            this.quantityJars(e);
                                        }}
                                        defaultValue={1}
                                    ></input>
                                </div>
                                <button
                                    className="toBasket"
                                    onClick={() => this.addToShoppingCart(row)}
                                >
                                    Do koszyka
                                </button>
                            </div>
                        </div>
                    );
                })}

                {cartProducts}
            </div>
        );
    }
}

export default Shop;
