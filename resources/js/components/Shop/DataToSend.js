import React from "react";

function DataToSend() {
    return (
        <div>
            <h2>Dane do wysyłki: </h2>
            <div>
                Imię:
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="data"
                ></input>
            </div>
            <div>
                Nazwisko:
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    className="data"
                ></input>
            </div>
            <div>
                Adres do wysyłki:
                <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="data"
                ></input>
            </div>
            <div>
                <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    required
                    className="telephone"
                ></input>
            </div>
        </div>
    );
}

export default DataToSend;
