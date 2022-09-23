import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("container_root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
