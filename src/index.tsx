import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { Header } from "./libs/components/header/header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col bg-bxm-main">
      <Header />
    </div>
  </React.StrictMode>
);
