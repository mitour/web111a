import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "../components/Form";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { user, setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state } = useLocation();
  const onSubmit = async (data) => {
    const API = `${window.location.protocol}//${window.location.hostname}:3000/users/login`;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(API, options);
    const responseJson = await response.json();
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 401
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
      setAuth(true);
      const authorization = response.headers.get("Authorization");
      localStorage.setItem(
        "user",
        JSON.stringify({ id: responseJson._id, authorization })
      );
      navigate(`/users/${responseJson._id}`, { replace: true });
    }
  };
  useEffect(() => {
    if (user) navigate(`/users/${user._id}`);
  }, [user]);
  return (
    <>
      <Form handleSubmit={handleSubmit(onSubmit)} type="Login">
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="信箱"
            id="email"
            value={state?.email}
            className="form-control"
            {...register("email", {
              required: { value: true, message: "此欄位必填" },
              pattern: {
                value: new RegExp(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
                message: "信箱格式不符",
              },
            })}
          />
          <span className="form-text text-danger">{errors.email?.message}</span>
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="密碼"
            id="password"
            className="form-control"
            {...register("password", {
              required: { value: true, message: "此欄位必填" },
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
            })}
          />
          <span className="form-text text-danger">
            {errors.password?.message}
          </span>
        </div>
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
