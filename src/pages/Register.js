import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Loading from "../components/Loading";
import InputPassword from "../components/InputPassword";
import { Alert, ModalAlert } from "../components/Swal";
import { RegisterApi } from "../services/api";

function Register() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const fetchRegister = async (data) => {
    setLoading(true);
    const response = await RegisterApi(data);
    const responseJson = await response.json();

    const { status } = response;
    const { message } = responseJson;

    setLoading(false);

    if (status === 400) Alert("error", message);
    if (status === 200) {
      ModalAlert(message);
      navigate("/users/login", { state: { email: data.email } });
    }
  };

  return (
    <>
      {loading ? <Loading /> : ""}
      <Form handleSubmit={handleSubmit(fetchRegister)} type="Register">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="姓名"
            id="name"
            className="form-control"
            {...register("name", {
              required: "此欄位必填",
              pattern: {
                value: /^[a-zA-Z0-9_]*$/,
                message: "不可特殊字元、空格",
              },
            })}
          />
          <span className="form-text text-danger">{errors.name?.message}</span>
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="信箱"
            id="email"
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
          validate={{
            ...register("password", {
              required: "此欄位必填",
              minLength: {
                value: 6,
                message: "密碼長度至少應該設定 6 碼以上",
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
        <InputPassword
          name="confirm_password"
          placeholder="再次輸入密碼"
          id="confirm_password"
          validate={{
            ...register("confirm_password", {
              required: "此欄位必填",
              validate: (value) =>
                value === watch("password") || "兩次密碼不相符",
            }),
          }}
          errors={errors.confirm_password?.message}
        />

        <div className="d-grid gap-2">
          <input type="submit" value="register" className="btn btn-primary" />
          <p>
            <Link to="/users/login">already has an account?</Link>
          </p>
        </div>
      </Form>
    </>
  );
}

export default Register;
