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
          data.map((item) => <li key={item._id}>{item.name}</li>)
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}

export default Users;
