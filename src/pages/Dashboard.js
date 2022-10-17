import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import Profile from "../components/Profile";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/users/login");
  }, [user]);
  return (
    <>
      <article className="container">
        <h1 className="h3 py-3 border-2 border-bottom">Profile</h1>
        {user ? (
          <>
            <section className="p-4 my-md-5 my-4 text-bg-light rounded-2 row row-cols-1 row-cols-md-2">
              <aside className="col-lg-4 text-center">
                <Profile />
              </aside>
              <article className="col-lg-8">
                <h2 className="h4 py-3 border-2 border-bottom">
                  Likes & Saves
                </h2>
                <ul className="list-unstyled row row-cols-1 g-4 pt-4">
                  <li key="saved playlist" className="col">
                    <Link
                      to="#"
                      className="card h-100 p-2 text-decoration-none"
                    >
                      <div className="card-body d-flex align-items-center">
                        <i className="fa-solid fa-bookmark fz-3 p-3 text-bg-primary rounded-2" />
                        <div className="ms-3">
                          <p className="h3 text-primary">5</p>
                          <h3 className="small text-muted">saved playlist</h3>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li key="videos liked" className="col">
                    <Link
                      to="#"
                      className="card h-100 p-2 text-decoration-none"
                    >
                      <div className="card-body d-flex align-items-center">
                        <i className="fa-solid fa-heart fz-3 p-3 text-bg-primary rounded-2" />
                        <div className="ms-3">
                          <p className="h3 text-primary">33</p>
                          <h3 className="small text-muted">videos liked</h3>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li key="videos comments" className="col">
                    <Link
                      to="#"
                      className="card h-100 p-2 text-decoration-none"
                    >
                      <div className="card-body d-flex align-items-center">
                        <i className="fa-solid fa-comment fz-3 p-3 text-bg-primary rounded-2" />
                        <div className="ms-3">
                          <p className="h3 text-primary">9</p>
                          <h3 className="small text-muted">videos comments</h3>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </article>
            </section>
          </>
        ) : (
          <Loading />
        )}
      </article>
    </>
  );
}

export default Dashboard;
