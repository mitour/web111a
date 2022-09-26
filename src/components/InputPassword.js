import { useState } from "react";

function InputPassword({
  name = "password",
  placeholder = "密碼",
  id = "password",
  validate,
  errors,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className="mb-3 position-relative">
      <input
        className="form-control pe-5"
        type={show ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        id={id}
        {...(validate ? validate : "")}
      />
      <button
        type="button"
        className="input-icon position-absolute bg-transparent border-0"
        onClick={toggleShow}
      >
        <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`} />
      </button>
      <span className="form-text text-danger">{errors}</span>
    </div>
  );
}

export default InputPassword;
