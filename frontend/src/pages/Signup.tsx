import React from "react";
import Quote from "../components/Quote";
import Form from "../components/Form";

const Signup = () => {
  return (
    <div className="h-screen flex">
      <Form type={"signup"} />
      <Quote />
    </div>
  );
};

export default Signup;
