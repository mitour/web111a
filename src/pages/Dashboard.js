import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

function Dashboard() {
  const { state } = useLocation();
  const [data, setData] = useState({});
  const fetchData = async () => {
    const API = `${window.location.protocol}//${window.location.hostname}:3000/users/${state._id}`;
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("user")).authorization,
      },
    };
    const response = await fetch(API, options);
    const responseJson = await response.json();
    const { name, email } = responseJson.data;
    setData({ name, email });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Dashboard</h1>
      <p>{data.name}</p>
      <p>{data.email}</p>
    </>
  );
}

export default Dashboard;
