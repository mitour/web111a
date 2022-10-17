import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { clearUserData } from "../services/constants";
import Profile from "../components/Profile";

import rocket from "../images/rocket.gif";
import rightArrow from "../images/right-arrow.gif";
import leftArrow from "../images/left-arrow.gif";

function Navbar() {
  const location = useLocation();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showSideBar, setShowSideBar] = useState(null);
  const { user, setUpdateCUser } = useAuth();
  const navigate = useNavigate();

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const logout = (e) => {
    e.preventDefault();
    clearUserData();
    setUpdateCUser(true);
    window.location.replace("/users/login");
  };

  useEffect(() => {
    setShowSideBar(false);
    if (!user) navigate("/users/login");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, [location]);
  return (
    <>
      <div className="d-flex">
        <aside
          className={`side-bar bg-dark p-3 text-center min-vh-100 overflow-auto ${
            showSideBar ? "show" : ""
          }`}
        >
          <Profile />
          <ul className="nav flex-column nav-pills nav-justified list-unstyled my-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/users">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/courses">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/comments">
                Comments
              </NavLink>
            </li>
          </ul>
          <footer>
            <hr className="text-secondary" />
            <Link
              className="fw-light text-decoration-none text-light logout-link"
              onClick={logout}
              to="/users/login"
            >
              Logout
              <i className="logout" />
            </Link>
          </footer>
        </aside>
        <button
          onClick={() => handleShowSideBar()}
          className="d-md-none position-absolute btn btn-primary p-0 rounded-0"
          // style={showSideBar ? `left:"90vw"` : ""}
        >
          <img
            src={showSideBar ? leftArrow : rightArrow}
            alt="right arrow"
            style={{ width: "40px" }}
          />
        </button>
        <main className="admin-main m-3 mt-5">
          <Outlet />
        </main>
        <button
          className="position-fixed border-0 p-1 bg-white rounded-circle shadow to-top"
          style={{ bottom: `${showTopBtn ? "100px" : "-100px"}` }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img className="m-2" src={rocket} alt="rocket" />
        </button>
      </div>
    </>
  );
}

export default Navbar;
