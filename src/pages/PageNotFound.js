import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="container page-not-found">
        <div className="row d-flex align-items-center text-center">
          <div className="col-md-6">
            <div className="text-clip">
              <h1>Oops!</h1>
              <h2>Page Not Found</h2>
            </div>
            <Link to="/">回首頁</Link>
          </div>
          <div className="col-md-6">
            <img
              className="img-thumbnail img-fluid"
              src="https://source.unsplash.com/random/?cat"
              alt="cat"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
