import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="hero d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white">Welcome to We Learn</h1>
        <Link
          to="/users/register"
          className="px-3 btn btn-primary rounded-pill"
        >
          Register
        </Link>
      </header>
    </>
  );
}

export default Home;
