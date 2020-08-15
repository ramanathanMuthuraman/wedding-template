import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const ROUTES = {
  HOME: "Home",
  DETAILS: "Details",
  GALLERY: "Gallery",
};

const Nav = () => {
  const [activeTab, setActiveTab] = useState(ROUTES.HOME);
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link
            className={activeTab === ROUTES.HOME ? "active" : ""}
            to="/"
            onClick={() => setActiveTab(ROUTES.HOME)}
          >
            <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link
            className={activeTab === ROUTES.DETAILS ? "active" : ""}
            to="/details"
            onClick={() => setActiveTab(ROUTES.DETAILS)}
          >
            <p>DETAILS</p>
          </Link>
        </li>
        <li>
          <Link
            className={activeTab === ROUTES.GALLERY ? "active" : ""}
            to="/gallery"
            onClick={() => setActiveTab(ROUTES.GALLERY)}
          >
            <p>GALLERY</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
