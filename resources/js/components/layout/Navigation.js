import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { ImMenu } from "react-icons/im";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    function showNav() {
        setShowMenu(!showMenu);
    }
    return (
        <div className="navigation">
            <div
                className="hamburgerIcon"
                onClick={(e) => setShowMenu(!showMenu)}
            >
                <ImMenu />
            </div>
            <nav className={showMenu ? "showMenu" : ""}>
                <Link to="/">Strona główna</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/sklep">Sklep</Link>
            </nav>
        </div>
    );
}

export default Navigation;
