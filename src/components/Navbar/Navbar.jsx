import "./Navbar.css";
import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isPathActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const indicatorBar = document.querySelector(".scroll-indicator-bar");
      const pageScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = (pageScroll / height) * 100;
      indicatorBar.style.width = scrollValue + "%";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const progress = document.querySelector("#progressbar");
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div id="progressbar"></div>
      <div id="scrollpath"></div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <GiKidneys /> HupMap - Human Vasculature
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HiDotsVertical/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className={isPathActive("/home") ? "nav-link text-warning" : "nav-link"}
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/predict"
                  className={isPathActive("/predict") ? "nav-link text-warning" : "nav-link"}
                >
                  <FaRegLightbulb /> Predict
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="scroll-indicator-container">
        <div className=" scroll-indicator-bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
