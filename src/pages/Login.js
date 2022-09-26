import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "../components/Form";
import Loading from "../components/Loading";
import InputPassword from "../components/InputPassword";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  let [loading, setLoading] = useState(false);
  const { user, setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state } = useLocation();
  const onSubmit = async (data) => {
    setLoading(true);
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
    setLoading(false);
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
      {loading ? <Loading /> : ""}
      <Form handleSubmit={handleSubmit(onSubmit)} type="Login">
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
          validate={{
            ...register("password", {
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
