import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../components/Loading";
import BsModal from "../components/Modal";
import InputPassword from "../components/InputPassword";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";

function Dashboard() {
  const { user, setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalP, setShowModalP] = useState(false);
  const [cuser, setCuser] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: changePassword,
    handleSubmit: handleSubmitChangePassword,
    watch,
    formState: { errors: errorsChangePassword },
  } = useForm();
  const logout = async () => {
    setLoading(true);
    localStorage.removeItem("user");
    setAuth(false);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const API = `${window.location.protocol}//${window.location.hostname}:3000/users/${user._id}`;
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: JSON.parse(localStorage.getItem("user")).authorization,
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(API, options);
    const responseJson = await response.json();
    setLoading(false);
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 401 ||
      response.status === 403
    ) {
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        showCloseButton: true,
        showConfirmButton: false,
        title: responseJson.message,
      });
    }
    if (response.status === 200) {
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "success",
        timer: 5000,
        timerProgressBar: true,
        showCloseButton: true,
        showConfirmButton: false,
        title: responseJson.message,
      });
      setShowModal(false);
      reset();
      setCuser(responseJson.data.name);
      if (Object.keys(data).includes("password")) {
        logout();
      }
    }
  };
  useEffect(() => {
    if (!user) navigate("/users/login");
  }, [user, cuser, navigate]);
  return (
    <>
      {loading ? <Loading /> : ""}
      <article className="container">
        <h1 className="h3 py-3 border-2 border-bottom">Profile</h1>
        {user ? (
          <>
            <section className="p-4 my-md-5 my-4 text-bg-light rounded-2 row row-cols-1 row-cols-md-2">
              <aside className="col-lg-4 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3006/3006876.png"
                  className="avatar-xl rounded-circle img-thumbnail mb-3"
                  alt="avatar"
                />
                <ul className="list-unstyled list-group text-start">
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <small className="text-muted">Full Name</small>
                        <p>{cuser ? cuser : user.name}</p>
                      </div>
                      <BsModal
                        show={showModal}
                        setShow={setShowModal}
                        title="Change name"
                      >
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-3">
                            <input
                              type="text"
                              name="name"
                              placeholder="姓名"
                              id="name"
                              className="form-control"
                              autoFocus
                              {...register("name", {
                                required: "此欄位必填",
                                pattern: {
                                  value: /^[a-zA-Z0-9_]*$/,
                                  message: "不可特殊字元、空格",
                                },
                                validate: (value) =>
                                  value !== (cuser ? cuser : user.name) ||
                                  "名字一樣喔",
                              })}
                            />
                            <span className="form-text text-danger">
                              {errors.name?.message}
                            </span>
                          </div>
                          <div className="d-grid gap-2">
                            <input
                              className="btn btn-primary"
                              type="submit"
                              value="更新"
                            />
                          </div>
                        </form>
                      </BsModal>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">Account status</small>
                    <p>{user.role}</p>
                  </li>
                  <li className="list-group-item">
                    <small className="text-muted">Email</small>
                    <p>{user.email}</p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <small className="text-muted">Password</small>
                        <p>********</p>
                      </div>
                      <BsModal
                        show={showModalP}
                        setShow={setShowModalP}
                        title="Change password"
                      >
                        <form onSubmit={handleSubmitChangePassword(onSubmit)}>
                          <InputPassword
                            name="old_password"
                            placeholder="舊密碼"
                            id="old_password"
                            validate={{
                              ...changePassword("old_password", {
                                required: "此欄位必填",
                              }),
                            }}
                            errors={errorsChangePassword.old_password?.message}
                          />
                          <InputPassword
                            placeholder="新密碼"
                            validate={{
                              ...changePassword("password", {
                                required: "此欄位必填",
                                minLength: {
                                  value: 8,
                                  message: "密碼長度至少應該設定 8 碼以上",
                                },
                                pattern: {
                                  value: new RegExp(
                                    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{6,}"
                                  ),
                                  message:
                                    "密碼格式不符：至少包含一位大寫英文字母、一位小寫英文字母及一位數字",
                                },
                              }),
                            }}
                            errors={errorsChangePassword.password?.message}
                          />
                          <InputPassword
                            name="confirm_password"
                            placeholder="再次輸入新密碼"
                            id="confirm_password"
                            validate={{
                              ...changePassword("confirm_password", {
                                required: "此欄位必填",
                                validate: (value) =>
                                  value === watch("password") ||
                                  "兩次密碼不相符",
                              }),
                            }}
                            errors={
                              errorsChangePassword.confirm_password?.message
                            }
                          />
                          <div className="d-grid gap-2">
                            <input
                              type="submit"
                              value="Update"
                              className="btn btn-primary"
                            />
                          </div>
                        </form>
                      </BsModal>
                    </div>
                  </li>
                </ul>
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
