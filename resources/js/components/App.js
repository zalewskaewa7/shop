import React from "react";
import ReactDOM from "react-dom";

function App() {
    return <div>App</div>;
}
ReactDOM.render(
    <Suspense fallback={<span>Loading...</span>}>
        <Index />
    </Suspense>,
    document.getElementById("app")
);
