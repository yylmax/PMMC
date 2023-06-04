import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#"
        >
          PMPC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                HomePage
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/intro"
              >
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/test"
              >
                Game2
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/game3"
              >
                Game3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
