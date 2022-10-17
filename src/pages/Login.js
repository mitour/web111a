import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Loading from "../components/Loading";
import InputPassword from "../components/InputPassword";
import { Alert } from "../components/Swal";
import { useAuth } from "../contexts/AuthContext";
import { LoginApi } from "../services/api";
import { getUserData } from "../services/constants";

function Login() {
  const [loading, setLoading] = useState(false);
  const { user, setUpdateCUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state } = useLocation();

  const fetchLogin = async (data) => {
    setLoading(true);
    const response = await LoginApi(data);
    const responseJson = await response.json();

    const { status } = response;
    const { message } = responseJson;

    setLoading(false);

    if (status === 400 || status === 500 || status === 401)
      Alert("error", message);
    if (status === 200) {
      const { _id, role } = responseJson.data;
      const authorization = response.headers.get("Authorization");
      Alert("success", message);
      localStorage.setItem("user", JSON.stringify({ id: _id, authorization }));
      setUpdateCUser(true);
      if (role === "admin" || role === "supervisor") {
        console.log("admin");
        navigate("/admin/users");
      } else {
        navigate(`/users/${user._id}`, { replace: true });
      }
    }
  };

  useEffect(() => {
    if (getUserData) {
      if (user)
        user.role === "admin" || user.role === "supervisor"
          ? navigate("/admin/users", { replace: true })
          : navigate(`/users/${user._id}`, { replace: true });
    }
  }, [user]);

  return (
    <>
      {loading ? <Loading /> : ""}
      <Form handleSubmit={handleSubmit(fetchLogin)} type="Login">
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="信箱"
            id="email"
            defaultValue={state?.email}
            className="form-control"
            {...register("email", {
              required: "此欄位必填",
              pattern: {
                value: new RegExp(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                message: "信箱格式不符",
              },
            })}
          />
          <span className="form-text text-danger">{errors.email?.message}</span>
        </div>
        <InputPassword
          name="password"
          placeholder="密碼"
          id="password"
          validate={{ ...register("password", { required: "此欄位必填" }) }}
          errors={errors.password?.message}
        />
        <div className="d-grid gap-2">
          <input type="submit" value="login" className="btn btn-primary" />
          <p>
            <Link to="/users/register">New here?</Link>
          </p>
        </div>
      </Form>
    </>
  );
}

export default Login;
