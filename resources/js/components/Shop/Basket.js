import React from "react";
import Cart from "./Cart";
import { useLocation } from "react-router-dom";
import basketProducts from "./basketProducts";
import "./basket.css";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";

const history = createBrowserHistory();

class Basket extends React.Component {
    constructor(props) {
        super(props);

        const price = window.localStorage.getItem("price");
        this.state = {
            basketElements: [],
            basketPrice: price,
        };
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentDidMount() {
        const cartElementsArray = JSON.parse(
            window.localStorage.getItem("basket")
        );
        this.setState({ basketElements: cartElementsArray });
    }

    deleteItem(e, quantity) {
        const basket = JSON.parse(window.localStorage.getItem("basket"));
        const eJarHoneyPrice = e.price;
        const honeyPriceAllE = e.price * quantity;
        console.log(honeyPriceAllE);
        const element1 = JSON.stringify(e);
        const localStoragePrice = JSON.parse(
            window.localStorage.getItem("price")
        );
        const newlocalStoragePrice = localStoragePrice - honeyPriceAllE;
        console.log(newlocalStoragePrice);

        for (var i = 0; i <= basket.length; i++) {
            const itemStringify = JSON.stringify(basket[i]);
            if (itemStringify === element1) {
                const index = i;
                const deleteElement = basket.splice(index, 1);
                const newArray = JSON.stringify(basket);
                // console.log(basket);
                const basketUpdate = localStorage.setItem("basket", newArray);
                this.setState({ basketElements: basket }); //<--poprawić
                const storagePrice = localStorage.setItem(
                    "price",
                    newlocalStoragePrice
                );
            }
        }

        // console.log(index);
        //const element = basket.find((e) => indexOf(e));
        const element = basket.indexOf((e) => e);
        var filteredArray = basket.filter((item) => item !== e);
        // console.log(element1);
    }

    toShop() {
        console.log("lala");
    }
    render() {
        const cartProducts = this.state.basketElements ? (
            this.state.basketElements.map((e) => {
                return (
                    <Cart
                        key={e.id}
                        product={e}
                        lessQuantity={this.props.lessQuantity}
                        moreQuantity={this.props.moreQuantity}
                        totalPrice={this.props.totalPrice}
                        quantityJars={this.props.quantityJars}
                        deleteItem={this.deleteItem}
                    />
                );
            })
        ) : (
            <>lala</>
        );
        return (
            <div className="basketElements">
                <h2>Moje zakupy:</h2>
                {this.state.basketElements &&
                this.state.basketElements.length ? (
                    <>
                        {cartProducts}

                        <div className="summary">
                            Razem: {window.localStorage.getItem("price")} zł
                        </div>
                        <div className="choice">
                            <button className="toShop">
                                <a href="/sklep">Kontynuuj zakupy</a>
                            </button>
                            <button className="toPay">
                                <Link to="/datatosend">Dostawa i Płatność</Link>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="noHoney">
                        <h4>Nie masz jeszcze nic w koszyku </h4>
                        <button className="toShop">
                            <a href="/sklep">Dodaj coś do koszyka</a>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default Basket;
