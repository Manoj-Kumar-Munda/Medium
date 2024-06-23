import React from "react";
import SignupForm from "../components/SignupForm";
import Quote from "../components/Quote";

const Signup = () => {
  return (
    <div className="h-screen flex flex-wrap">
      <SignupForm />
      <Quote />
    </div>
  );
};

export default Signup;
