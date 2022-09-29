// funtions of react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// pages
import App from "./App";

// Style files
import "./styles/index.sass";
import "./assets/styles/mobileStyles/MobileStyles.sass";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
