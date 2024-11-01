import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

window.onload = () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const body = document.body;
    loader.classList.add("loader-wrapper--none");
    body.classList.remove("overflow-hidden");
  }, 0);
};
