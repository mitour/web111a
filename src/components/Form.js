import React from "react";

function Form(props) {
  return (
    <>
      <div className="form-bg position-relative">
        <div className="form-block pb-sm-3 p-sm-5 p-3 pt-5 text-center rounded-4 position-absolute top-50 start-50 translate-middle">
          <h1 className="mb-3 text-black-50 fw-light">{props.type}</h1>
          <form onSubmit={props.handleSubmit}>{props.children}</form>
        </div>
      </div>
    </>
  );
}

export default Form;
