import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import NavbarBB from "../NavbarB/NavbarBB.css";


const NavbarB = () => {
  return (
    <div className="container" id="navbar">
      <div className="row">
        <div className="col-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                GameTech
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={"/category/notebooks"}
                    >
                      Notebooks
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/joysticks"}>
                      Joysticks
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/auriculares"}>
                      Auriculares
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-6 d-flex justify-content-end  align-items-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavbarB;
