import React from "react";
import ReactDOM from "react-dom/client";
import "@assets/css/index.css";
import {
  AboutUs,
  Header,
  Hero,
  Portfolio,
  Services,
} from "@libs/components/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col bg-bxm-main px-[10px] sm:px-[20px] md:px-[40px]">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
    </div>
  </React.StrictMode>
);
