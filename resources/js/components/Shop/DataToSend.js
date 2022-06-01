import React from "react";
import "./dataTosend.css";
import axios from "axios";

class DataToSend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            address: "",
            telephone: "",
            order: [],
            price: window.localStorage.getItem("price"),
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    validateTelephone() {
        if (
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
                this.state.telephone
            )
        ) {
            console.log(this.state.telephone);
            return true;
        } else {
            return false;
        }
    }
    validateData(data) {
        console.log(data);
        if (data.length >= 3) {
            console.log("ok" + data);
            return true;
        } else {
            return false;
        }
    }
    sendOrder(e) {
        e.preventDefault();
        const basket = JSON.parse(window.localStorage.getItem("basket"));
        const localStoragePrice = JSON.parse(
            window.localStorage.getItem("price")
        );
        if (
            this.validateData(this.state.name) &&
            this.validateData(this.state.surname) &&
            this.validateData(this.state.address) &&
            this.validateTelephone(this.state.telephone)
        ) {
            axios
                .post("/api/formsubmit", {
                    name: this.state.name,

                    surname: this.state.surname,
                    address: this.state.address,
                    telephone: this.state.telephone,
                    order: window.localStorage.getItem("order"),

                    price: this.state.price,
                })

                .then(function (response) {
                    console.log(response.data);
                })

                .catch(function (error) {
                    console.log(error);
                });

            // this.setState({
            //     name: "",
            //     surname: "",
            //     address: "",
            //     telephone: "",
            // });
            console.log("udalo sie");
        } else {
            console.log("Popraw dane do wysyłki");
        }
    }
    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <h2>Dane do wysyłki: </h2>
                <form onSubmit={(e) => this.sendOrder(e)}>
                    <div className="data">
                        Imię:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="data"
                            value={this.state.name}
                            onChange={this.onChangeValue}
                        ></input>
                    </div>
                    <div className="data">
                        <label>Nazwisko:</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            required
                            className="data"
                            value={this.state.surname}
                            onChange={this.onChangeValue}
                        ></input>
                    </div>
                    <div className="data">
                        Adres do wysyłki:
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            className="data"
                            value={this.state.address}
                            onChange={this.onChangeValue}
                        ></input>
                    </div>
                    <div className="data">
                        Telefon:
                        <input
                            type="text"
                            id="telephone"
                            name="telephone"
                            required
                            className="data"
                            value={this.state.telephone}
                            onChange={this.onChangeValue}
                        ></input>
                    </div>
                    <button>Przejdź do płatności</button>
                </form>
            </div>
        );
    }
}

export default DataToSend;
