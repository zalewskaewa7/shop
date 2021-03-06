import React from "react";
import ReactDOM from "react-dom";
import Haeder from "./layout/Haeder";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import Basket from "./Shop/Basket";
import Cart from "./Shop/Cart";
import DataToSend from "./Shop/DataToSend";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { indexOf } from "lodash";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartElements: [],
            quantity: 1,
            totalPrice: 0,
            productAdded: false,
        };

        this.addToShoppingCart = this.addToShoppingCart.bind(this);
        this.quantityJars = this.quantityJars.bind(this);

        this.lessQuantity = this.lessQuantity.bind(this);
        this.moreQuantity = this.moreQuantity.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    basketUpdate(row, newProduct) {
        const localStoragePrice = JSON.parse(
            window.localStorage.getItem("price")
        );
        const jarPrice = parseInt(row.price);

        const quantityPrice = this.state.quantity * jarPrice;
        const newPrice = localStoragePrice + quantityPrice;

        this.setState({ quantity: 1 });
        this.setState({
            totalPrice: newPrice,
        });

        const savecartElements = JSON.stringify(newProduct);
        const localBasket = localStorage.setItem("basket", savecartElements);
        const storagePrice = localStorage.setItem("price", newPrice);
        const quantity = localStorage.setItem(
            row.honeyType,
            this.state.quantity
        );
    }
    removeAlert() {
        this.setState({ productAdded: false });
    }
    removeMessage() {
        setTimeout(() => this.removeAlert(), 3000);
    }

    addToShoppingCart(row) {
        this.setState({ productAdded: true });

        const item = {
            id: row.honeyType,
            quantity: this.state.quantity,
            honeyType: row.honeyType,
            weight: row.weight,
            price: row.price,
        };

        if (localStorage.getItem("basket")) {
            const basket = JSON.parse(window.localStorage.getItem("basket"));

            for (var i = 0; i < basket.length; i++) {
                if (basket[i].id === item.id) {
                    basket[i].quantity = basket[i].quantity + item.quantity;
                    const quantity = localStorage.setItem(
                        row.honeyType,
                        basket[i].quantity
                    );
                    const oldPrice = JSON.parse(
                        window.localStorage.getItem("price")
                    );
                    const jarPrice = parseInt(row.price);
                    localStorage.setItem(
                        "price",
                        jarPrice * item.quantity + oldPrice
                    );
                    this.removeMessage();
                    this.setState({ quantity: 1 });
                    return;
                }
            }

            const newProduct = [item, ...basket];
            this.setState({ cartElements: newProduct });
            this.basketUpdate(row, newProduct);
        } else {
            const newProduct = [item, ...this.state.cartElements];
            this.setState({ cartElements: newProduct });

            this.basketUpdate(row, newProduct);
        }

        this.removeMessage();
    }

    quantityJars(e) {
        const changedQuantity = parseInt(e.target.value);

        this.setState({ quantity: changedQuantity });
    }
    lessQuantity(price) {
        var parsePrice = parseInt(price);
        var localPrice = window.localStorage.getItem("price");

        if (localPrice > 0) {
            var newPrice = parseInt(localPrice) - parsePrice;

            this.setState({ totalPrice: newPrice });
            const storagePrice = localStorage.setItem("price", newPrice);
        }
    }
    moreQuantity(price) {
        var parsePrice = parseInt(price);
        var localPrice = window.localStorage.getItem("price");

        var newPrice = parseInt(localPrice) + parsePrice;

        this.setState({ totalPrice: newPrice });
        const storagePrice = localStorage.setItem("price", newPrice);
    }

    deleteItem(e) {
        const basket = JSON.parse(window.localStorage.getItem("basket"));
        const arrayProducts = this.state.cartElements;
        const element1 = JSON.stringify(e);

        for (var i = 0; i <= basket.length; i++) {
            const itemStringify = JSON.stringify(basket[i]);
            if (itemStringify === element1) {
                const index = i;
                const deleteElement = basket.splice(index, 1);
                const newArray = JSON.stringify(basket);
                // console.log(basket);
                const basketUpdate = localStorage.setItem("basket", newArray);
                this.setState({ cartElements: basket }); //<--poprawi??
            }
        }

        // console.log(index);
        //const element = basket.find((e) => indexOf(e));
        const element = basket.indexOf((e) => e);
        var filteredArray = basket.filter((item) => item !== e);
        // console.log(element1);
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
                                productAdded={this.state.productAdded}
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
                                deleteItem={this.deleteItem}
                            />
                        }
                    />
                    <Route path="/datatosend" element={<DataToSend />} />
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
