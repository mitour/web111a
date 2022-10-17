import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { UpdateApi } from "../services/api";
import { clearUserData } from "../services/constants";
import Loading from "../components/Loading";
import BsModal from "../components/Modal";
import InputPassword from "../components/InputPassword";
import { Alert } from "../components/Swal";
import { AvatarUploader } from "../components/AvatarUploader";
import { useNavigate } from "react-router";

function Profile() {
  const { user, setUpdateCUser } = useAuth();
  const navigate = useNavigate();
  const [cUser, setCUser] = useState({ src: null, name: null });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalP, setShowModalP] = useState(false);
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

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await UpdateApi(user._id, data);
    const responseJson = await response.json();

    const { status } = response;
    const { message } = responseJson;

    setLoading(false);

    if (status === 400 || status === 500 || status === 401 || status === 403)
      Alert("error", message);
    if (status === 200) {
      Alert("success", message);
      if (Object.keys(data).includes("password")) {
        clearUserData();
        navigate("/users/login");
      } else {
        setCUser((prevState) => {
          return { ...prevState, name: data.name };
        });
        setUpdateCUser(true);
        setShowModal(false);
        reset();
      }
    }
  };
  const updateAvatar = async () => {
    setLoading(true);
    const response = await UpdateApi(user._id, { avatar: cUser.src });
    const responseJson = await response.json();
    const { status } = response;
    const { message } = responseJson;

    setLoading(false);

    if (status === 400 || status === 500 || status === 401 || status === 403)
      Alert("error", message);
    if (status === 200) {
      Alert("success", message);
      setUpdateCUser(true);
    }
  };
  useEffect(() => {
    if (cUser.src) updateAvatar();
  }, [cUser]);
  return (
    <>
      {loading ? <Loading /> : ""}
      {user ? (
        <>
          <AvatarUploader defaultSrc={user.avatar} setCUser={setCUser} />
          <ul className="list-unstyled list-group text-start">
            <li className="list-group-item">
              <div className="d-flex justify-content-between">
                <div>
                  <small className="text-muted">Full Name</small>
                  <p>{cUser.name ? cUser.name : user.name}</p>
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
                            value !== cUser.name || "名字一樣喔",
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
                            value === watch("password") || "兩次密碼不相符",
                        }),
                      }}
                      errors={errorsChangePassword.confirm_password?.message}
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
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
