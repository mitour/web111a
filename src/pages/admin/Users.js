import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UsersApi } from "../../services/api";
import Loading from "../../components/Loading";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { DeleteApi } from "../../services/api";
import { Alert } from "../../components/Swal";
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
    setLoading(true);
    const response = await DeleteApi(id);
    const responseJson = await response.json();
    setLoading(false);
    const { status } = response;
    const { message } = responseJson;
    if (status === 404 || status === 500) {
      Alert("error", message);
    } else if (status === 200) {
      Alert("success", message);
      fetchData();
    }
  };

  const handleEdit = async (id) => {
    console.log(`edit:${id}`);
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
                <th scope="col">Avatar</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Role</th>
                <th scope="col">created At</th>
                <th scope="col">updated At</th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            {data
              ? data.map((item, index) => (
                  <tbody key={item._id}>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          src={item.avatar}
                          alt="avatar"
                          className="avatar-sm"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td
                        className={
                          item.status === "Pending"
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        {item.status}
                      </td>
                      <td>{item.role}</td>
                      <td className="text-nowrap">
                        {item.createdAt.slice(0, 10)}
                      </td>
                      <td className="text-nowrap">
                        {item.updatedAt.slice(0, 10)}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEdit(item._id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDel(item._id)}
                        >
                          Delete
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
