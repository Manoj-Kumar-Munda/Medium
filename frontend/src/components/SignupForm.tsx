import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const SignupForm = () => {
  return (
    <div className="grow basis-96 w-full">
      <div className="grid place-content-center h-full border border-white px-2 ">
        <section className="text-center space-y-2">
          <h1 className=" text-4xl md:text-5xl font-bold">Create an account</h1>
          <p>
            Already have an account?{" "}
            <Link className="underline" to={"/signin"}>
              Sign in
            </Link>
          </p>
        </section>

        <form className="my-4 space-y-3">
          <Input label="Name" placeholder="Enter your name" />
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Password" placeholder="Create password" />

          <button className="bg-black text-white w-full py-2 rounded-md">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
