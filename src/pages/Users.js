import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UsersApi } from "../services/api";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";

function Users() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const fetchData = async () => {
    setLoading(true);
    const response = await UsersApi();
    const responseJson = await response.json();
    setData(responseJson.data);
    setLoading(false);
  };
  const handleDel = async (id) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMzYmVlMzQxZDQyNzJmM2VjZDgxODMiLCJpYXQiOjE2NjU3NDIwMTgsImV4cCI6MTY2NTgyODQxOH0.KwV_z5xIktP0IxXoHaEtDIXsmqky87m8ZqODQvH_niA",
    };

    let bodyContent = new FormData();
    bodyContent.append(
      "avatar",
      "/Users/mitourk/Downloads/bruno-van-der-kraan-U4N1Hwr7KEg-unsplash.jpg"
    );

    let response = await fetch(`http://127.0.0.1:3000/users/${id}`, {
      method: "DELETE",
      body: bodyContent,
      headers: headersList,
    });
    let data = await response.json();
    console.log(data.message);
  };
  useEffect(() => {
    if (!user) navigate("/users/login");
    fetchData();
  }, []);
  return (
    <>
      {loading ? <Loading /> : ""}
      <h1>Users</h1>
      <ul>
        {data ? (
          data.map((item) => (
            <li key={item._id}>
              {item._id} :{item.name}
              <button onClick={() => handleDel(item._id)}>del</button>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}

export default Users;
