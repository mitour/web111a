import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

function PageNotFound() {
  let [loading, setLoading] = useState(false);
  const [url, setUrl] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const API = `https://api.unsplash.com/photos/random?query=cat&orientation=portrait`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KRY}`,
        },
      };
      const response = await fetch(API, options);
      const responseJson = await response.json();
      setUrl(responseJson.urls.regular);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container page-not-found vh-100">
        <div className="row d-flex align-items-center text-center">
          <div className="col-md-6">
            <div className="text-clip">
              <h1>Oops!</h1>
              <h2>Page Not Found</h2>
            </div>
            <p>
              你可以
              <Link to="/">回首頁</Link>
              或是休息一下看看可愛的貓貓( σ'ω')σ
            </p>
          </div>
          <div className="col-md-6">
            {loading ? (
              <ScaleLoader color="#2b3a64" />
            ) : (
              <img className="img-thumbnail img-fluid" src={url} alt="cat" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
