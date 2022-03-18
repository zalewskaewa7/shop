import React from "react";
import Haeder from "./layout/Haeder";
import Home from "./Home/Home";
import ReactDOM from "react-dom";

function App() {
    return (
        <div>
            <Haeder />
            <Home />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("app"));
