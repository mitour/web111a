import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <nav className="fixed-top navbar p-sm-0 navbar-expand-sm navbar-dark bg-dark bg-opacity-75">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/favicon_dark.svg`}
              alt="Logo"
              height="50"
              className="d-inline-block align-text-center me-2"
            />
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
            <ul className="navbar-nav align-items-center">
              <li className="nav-item me-3">
                <Link className="nav-link px-3" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link px-3" to="/about">
                  About
                </Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item me-3 dropdown">
                    <Link
                      class="dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3006/3006876.png"
                        className="avatar-sm rounded-circle img-thumbnail d-sm-block d-none"
                        alt="avatar"
                      />
                    </Link>
                    <Link
                      class="btn btn-primary dropdown-toggle d-block d-sm-none"
                      role="button"
                      to="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      John doe
                    </Link>
                    <ul class="dropdown-menu dropdown-menu-end text-center text-bg-dark mt-2 p-3">
                      <li className="mb-2">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3006/3006876.png"
                          className="avatar-lg rounded-circle img-thumbnail"
                          alt="avatar"
                        />
                      </li>
                      <li>
                        <h3 className="h5 m-0">John doe</h3>
                      </li>
                      <li>
                        <small className="text-white-50">Student</small>
                      </li>
                      <li className="mt-2">
                        <Link class="btn btn-primary" to="#">
                          View Profile
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link
                          className="fw-light text-decoration-none text-light logout-link"
                          to="/users/login"
                        >
                          Logout
                          <i class="logout"></i>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-3">
                    <Link className="nav-link px-3" to="/users/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/users/register"
                      className="nav-link px-3 btn btn-primary rounded-pill"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="content">
        <Outlet />
      </div>
      <footer className="footer bg-light">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <h3 className="h6 m-0">
            <span className="text-muted">勞動部勞動力發展署 桃竹苗分署</span>{" "}
            <br className="d-lg-none" />
            跨平台網頁程式設計與智能聯網(幼獅) 第01期 期末專案
          </h3>
          <a
            className="text-reset social-media"
            href="https://github.com/mitour/web111a"
          >
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
