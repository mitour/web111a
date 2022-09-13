import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="fixed-top navbar navbar-expand-sm navbar-dark bg-dark bg-opacity-25">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.svg`}
              alt="Logo"
              height="50"
              className="d-inline-block align-text-center me-2"
            />
            We Learn
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
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/users/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content vh-100">
        <Outlet />
      </div>
      <footer className="footer bg-light">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <h3 className="h6 m-0">
            <span className="text-muted">勞動部勞動力發展署 桃竹苗分署</span>{" "}
            <br className="d-lg-none" />
            跨平台網頁程式設計與智能聯網(幼獅) 第01期 期末專案
          </h3>
          <a className="text-reset" href="https://github.com/mitour/web111a">
            <span className="d-none d-md-inline-block me-2 align-text-bottom">
              Github@Mitour
            </span>
            <i className="fs-3 fa-brands fa-github" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Navbar;
