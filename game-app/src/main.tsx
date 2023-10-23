import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // In react strict mode each component is render twice in first render it detect potential
  // errors while second twice just render the interface
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
