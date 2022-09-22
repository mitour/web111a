import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/users/login");
    }
  }, [user]);
  return (
    <>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Dashboard;
