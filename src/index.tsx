import React from "react";
import ReactDOM from "react-dom/client";
import "@assets/css/index.css";
import { App } from "@libs/components/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
