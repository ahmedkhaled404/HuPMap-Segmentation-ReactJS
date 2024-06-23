import "./Layout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <section className="main-tag">
      <Navbar />
      <div className="main-outlet">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
