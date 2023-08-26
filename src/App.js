import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/css/404.css";
import "../src/css/farmework.css";
import "../src/css/all.min.css";
// import "../src/assets/img/alpha-logo.png";
import Home from "./pages/home";
import Web from "./pages/web";
import Pathes from "./pages/pathes";
import Error from "./pages/error";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) window.open(location.hash, "_parent");
  }, [location.hash]);
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/web" element={<Web />} errorElement={<Error />} />
      <Route path="/pathes" element={<Pathes />} errorElement={<Error />} />
    </Routes>
  );
};

export default App;
