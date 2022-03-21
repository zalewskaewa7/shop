import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <nav>
                <Link to="/">Strona główna</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/sklep">Sklep</Link>
            </nav>
        </div>
    );
}

export default Navigation;
