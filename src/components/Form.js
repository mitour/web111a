import React from "react";

function Form(props) {
  return (
    <>
      <div className="form-bg position-relative">
        <div className="form_block p-5 pb-3 text-center rounded-4 position-absolute top-50 start-50 translate-middle">
          <h1 className="mb-3 text-black-50 fw-light">{props.type}</h1>
          <form onSubmit={props.handleSubmit}>{props.children}</form>
        </div>
      </div>
    </>
  );
}

export default Form;
