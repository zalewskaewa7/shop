import React from "react";
import "./contactBar.css";
import minismartphone from "../Images/minismartphone.png";

function ContactBar() {
    return (
        <div className="contactBar">
            <a href="tel: 669 557 636">
                <img src={minismartphone} alt="minismartphone" /> 669 557 636
            </a>
        </div>
    );
}

export default ContactBar;
