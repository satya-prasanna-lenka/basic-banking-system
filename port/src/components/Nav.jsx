import React from "react";
import { Link } from "react-router-dom";
import ss from "../images/bank.jpg";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={ss} height={50} alt="Loading..." />

            <h5 style={{ position: "relative", left: "10px" }}>
              Sparks Banking
            </h5>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="all">
                  View all customer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="histroy">
                  History
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <Link className="myResg" to="/register">
            <button className="btn btn-outline-warning">Register</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
