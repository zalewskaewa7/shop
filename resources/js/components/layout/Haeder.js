import React from "react";
import ContactBar from "./ContactBar";
import Menu from "./Menu";
import "./haeder.css";

function Haeder() {
    return (
        <div className="haeder">
            <ContactBar />
            <Menu />
        </div>
    );
}

export default Haeder;
