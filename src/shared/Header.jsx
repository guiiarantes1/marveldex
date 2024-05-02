import React from "react";
import "./Header.css";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src="/images/marvel-header.png"></img>
        </a>
      </div>
      <div className="menu">
        <NavBar />
      </div>
      <nav className="espacamento"></nav>
      <div class="dropdown">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i class="bi bi-list"></i>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
          
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              
            ><i class="bi bi-x"></i></button>
          </div>
          <div class="offcanvas-body">
            <ul class="nav-canva">
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to={`/`}>
                  Heróis
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to={`/favorites`}>
                  Favoritos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
