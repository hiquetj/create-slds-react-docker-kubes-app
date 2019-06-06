import React from "react";
import ReactDOM from "react-dom";
import GlobalNavBar from "./GlobalNavBar";

it("renders component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GlobalNavBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});