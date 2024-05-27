import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./Context/Cart";
import reportWebVitals from "./reportWebVitals";
import { CounterProvider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
