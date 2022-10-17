import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UsersApi } from "../../services/api";
import Loading from "../../components/Loading";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

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
    fetchData();
  }, []);
  return (
    <>
      {loading ? <Loading /> : ""}
      <main>
        <h1 className="m-0">Users</h1>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr className="text-nowrap">
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Role</th>
                <th scope="col">created At</th>
                <th scope="col">updated At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {data
              ? data.map((item, index) => (
                  <tbody key={item._id}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item._id}</td>
                      <td>
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="avatar-sm"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.status}</td>
                      <td>{item.role}</td>
                      <td className="text-nowrap">
                        {item.createdAt.slice(0, 10)}
                      </td>
                      <td className="text-nowrap">
                        {item.updatedAt.slice(0, 10)}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDel(item._id)}
                        >
                          del
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              : ""}
          </table>
        </div>
      </main>
    </>
  );
}

export default Users;
