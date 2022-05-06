import React from "react";
import axios from "axios";
import Cart from "./Cart";
import Basket from "./Basket";

import "./Shop.css";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            cartElements: [],
            // honeyType: "",
            // weight: "",
            // price: "",
            quantity: 1,
            totalPrice: 0,
        };
        // this.moreQuantity = this.moreQuantity.bind(this);
        // this.lessQuantity = this.lessQuantity.bind(this);
    }

    componentDidMount() {
        axios.get("/api/apiary").then((response) => {
            this.setState({ datas: response.data });
        });
        // this.setState({ honeyType: "" });
        // this.setState({ weight: "" });
        // this.setState({ price: "" });
        // this.setState({ quantity: 1 });
    }

    // addToShoppingCart(row) {
    //     const item = {
    //         id: Math.random(),
    //         quantity: this.state.quantity,
    //         honeyType: row.honeyType,
    //         weight: row.weight,
    //         price: row.price,
    //     };

    //     const newProduct = [item, ...this.state.cartElements];
    //     this.setState({ cartElements: newProduct });
    //     this.setState({ quantity: 1 });
    //     this.setState({
    //         totalPrice: this.state.totalPrice + this.state.quantity * row.price,
    //     });
    // }

    // changeTotalPrice(newTotalPrice) {
    //     console.log(newTotalPrice);
    //     this.setState({
    //         totalPrice: newTotalPrice,
    //     });
    // }

    // lessQuantity(price) {
    //     this.setState({ totalPrice: this.state.totalPrice - price });
    // }
    // moreQuantity(price) {
    //     var parsePrice = parseInt(price);

    //     var newPrice = this.state.totalPrice + parsePrice;

    //     this.setState({ totalPrice: newPrice });
    // }
    // changeQuantity(e, oldQuantity, price, oldTotalPrice) {
    //     var newQuanity = e.target.value - oldQuantity;
    //     console.log(newQuanity);
    //     var newPrice = newQuanity * price;
    //     console.log(oldTotalPrice);

    //     var newTotalPrice = this.state.totalPrice + newPrice;

    //     this.setState({ totalPrice: newTotalPrice });

    //     // () => {
    //     //     this.changeTotalPrice(newTotalPrice);
    //     // };
    // }

    render() {
        // if (window.localStorage.getItem("basket")) {
        const cartElementsArray = JSON.parse(
            window.localStorage.getItem("basket")
        );
        const cartProducts = cartElementsArray.map((e) => {
            return (
                <Cart
                    key={e.id}
                    product={e}
                    lessQuantity={this.props.lessQuantity}
                    moreQuantity={this.props.moreQuantity}
                    totalPrice={this.props.totalPrice}
                    quantityJars={this.props.quantityJars}
                />
            );
        });
        // }

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
                {localStorage.getItem("basket") ? (
                    <div className="miniBasket">
                        <h2>Moje zakupy:</h2>
                        {cartProducts}
                        <div className="totalPrice">
                            Razem: {window.localStorage.getItem("price")} zł
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Shop;
