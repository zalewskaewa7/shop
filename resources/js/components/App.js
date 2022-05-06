import React from "react";
import ReactDOM from "react-dom";
import Haeder from "./layout/Haeder";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Basket from "./Shop/Basket";
import Cart from "./Shop/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        // const basket = localStorage.setItem("basket", "");
        // const cartElementsArray = JSON.parse(
        //     window.localStorage.getItem("basket")
        // );
        this.state = {
            cartElements: [],
            quantity: 1,
            totalPrice: 0,
        };

        this.addToShoppingCart = this.addToShoppingCart.bind(this);
        this.quantityJars = this.quantityJars.bind(this);

        this.lessQuantity = this.lessQuantity.bind(this);
        this.moreQuantity = this.moreQuantity.bind(this);
    }
    basketUpdate(row, newProduct) {
        const oldPrice = parseInt(row.price);
        const quantityPrice = this.state.quantity * oldPrice;
        const parseTotalPrice = parseInt(this.state.totalPrice);
        const newPrice = parseTotalPrice + quantityPrice;
        console.log(quantityPrice);
        console.log(parseTotalPrice);

        // this.setState({ cartElements: newProduct });
        this.setState({ quantity: 1 });
        this.setState({
            totalPrice:
                localStorage.getItem("price") + this.state.quantity * row.price,
        });

        const savecartElements = JSON.stringify(newProduct);
        const localBasket = localStorage.setItem("basket", savecartElements);
        const storagePrice = localStorage.setItem("price", newPrice);
        const quantity = localStorage.setItem(
            "quantity" + row.honeyType,
            this.state.quantity
        );
    }

    addToShoppingCart(row) {
        localStorage.removeItem("price");
        localStorage.removeItem("basket");
        const item = {
            id: row.honeyType,
            quantity: this.state.quantity,
            honeyType: row.honeyType,
            weight: row.weight,
            price: row.price,
        };
        if (localStorage.getItem("basket")) {
            const basket = JSON.parse(window.localStorage.getItem("basket"));
            const newProduct = [item, ...basket];
            this.setState({ cartElements: newProduct });
            this.basketUpdate(row, newProduct);
        } else {
            const newProduct = [item, ...this.state.cartElements];
            this.setState({ cartElements: newProduct });

            this.basketUpdate(row, newProduct);
        }
    }

    quantityJars(e) {
        console.log(e.target.value);

        this.setState({ quantity: e.target.value });
    }
    lessQuantity(price) {
        var parsePrice = parseInt(price);

        var newPrice = this.state.totalPrice - parsePrice;
        this.setState({ totalPrice: this.state.totalPrice - price });
        const storagePrice = localStorage.setItem("price", newPrice);
    }
    moreQuantity(price) {
        var parsePrice = parseInt(price);
        var localPrice = window.localStorage.getItem("price");

        var newPrice = parseInt(localPrice) + parsePrice;

        this.setState({ totalPrice: newPrice });
        const storagePrice = localStorage.setItem("price", newPrice);

        // this.setState({ quantity: this.state.quantity + 1 });
    }

    render() {
        const cartProducts = this.state.cartElements.map((e) => {
            return (
                <Cart
                    key={e.id}
                    product={e}
                    lessQuantity={this.lessQuantity}
                    moreQuantity={this.moreQuantity}
                    totalPrice={this.state.totalPrice}
                    quantityJars={this.quantityJars}
                />
            );
        });

        return (
            <div>
                <Haeder />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/sklep"
                        element={
                            <Shop
                                addToShoppingCart={this.addToShoppingCart}
                                cartElements={this.state.cartElements}
                                totalPrice={this.state.totalPrice}
                                quantity={this.state.quantity}
                                lessQuantity={this.lessQuantity}
                                moreQuantity={this.moreQuantity}
                                quantityJars={this.quantityJars}
                            />
                        }
                    />
                    <Route
                        path="/koszyk"
                        element={
                            <Basket
                                addToShoppingCart={this.addToShoppingCart}
                                cartElements={cartProducts}
                                totalPrice={this.state.totalPrice}
                                quantity={this.state.quantity}
                                lessQuantity={this.lessQuantity}
                                moreQuantity={this.moreQuantity}
                                quantityJars={this.quantityJars}
                            />
                        }
                    />
                </Routes>
            </div>
        );
    }
}

export default App;
if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("app")
    );
}
