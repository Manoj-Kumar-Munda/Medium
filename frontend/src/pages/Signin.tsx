import React from "react";
import Quote from "../components/Quote";
import Form from "../components/Form";

const Signin = () => {
  return (
    <div className="h-screen flex">
      <Form type={"signin"} />
      <Quote />
    </div>
  );
};

export default Signin;
