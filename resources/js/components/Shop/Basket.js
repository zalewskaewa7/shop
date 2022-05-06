import React from "react";
import Cart from "./Cart";
import { useLocation } from "react-router-dom";
import basketProducts from "./basketProducts";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        const cartElementsArray = JSON.parse(
            window.localStorage.getItem("basket")
        );
        const price = window.localStorage.getItem("price");
        this.state = {
            basketElements: cartElementsArray,
            basketPrice: price,
        };
    }

    // function cartProducts() {
    //     var cartElements = props.cartElements.map((e) => {
    //         return (
    //             <Cart
    //                 key={props.e.id}
    //                 product={props.e}
    //                 lessQuantity={props.lessQuantity}
    //                 moreQuantity={props.moreQuantity}
    //                 totalPrice={props.state.totalPrice}
    //             />
    //         );
    //     });
    //     setCartProduct(cartElements);
    // }
    render() {
        const cartProducts = this.state.basketElements.map((e) => {
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

        return (
            <div className="basketElements">
                <h2>Moje zakupy:</h2>
                {cartProducts}

                <div className="totalPrice">
                    Razem: {window.localStorage.getItem("price")} zł
                </div>
            </div>
        );
    }
}

export default Basket;
