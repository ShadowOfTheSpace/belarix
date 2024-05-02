import "@assets/css/index.css";
import { App } from "@libs/components/components";
import { AppRoute } from "@libs/enums/enums";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/belarix">
      <Routes>
        <Route path={AppRoute.ROOT} element={<App />} />
        <Route path={AppRoute.CONTACT_US} element={<App />} />
        <Route path={AppRoute.PRIVACY_POLICY} element={<App />} />
        <Route path={AppRoute.TERM_OF_USE} element={<App />} />
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
