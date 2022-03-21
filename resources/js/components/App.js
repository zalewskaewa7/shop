import React from "react";
import ReactDOM from "react-dom";
import Haeder from "./layout/Haeder";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Haeder />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sklep" element={<Shop />} />
            </Routes>
        </div>
    );
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
