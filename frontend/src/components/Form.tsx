import { Link } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import { SigninInput, SignupInput } from "@manojk999/medium-common";

const Form = ({ type }: { type: "signup" | "signin" }) => {
  const [signupData, setSignupData] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const [signinData, setSigninData] = useState<SigninInput>({
    email: "",
    password: "",
  });

  console.log(signupData);
  
  return (
    <div className="grow basis-1/2 w-full">
      <div className="flex flex-col justify-center items-center h-full border border-white px-2 ">
        <div className="max-w-lg w-full">
          <section className="text-center space-y-2">
            <h1 className="text-nowrap text-5xl font-bold">
              {type === "signup" ? "Create an account" : "Login"}
            </h1>

            {type === "signup" ? (
              <p>
                Already have an account?{" "}
                <Link className="underline" to={"/signin"}>
                  Sign in
                </Link>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <Link className="underline" to={"/signup"}>
                  Sign up
                </Link>
              </p>
            )}
          </section>

          <form className="my-4 space-y-3">
            {type === "signup" && (
              <Input
                label="Name"
                placeholder="Enter your name"
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
              />
            )}
            <Input
              label="Email"
              placeholder="Enter your email"
              onChange={
                type === "signup"
                  ? (e) =>
                      setSignupData({ ...signupData, email: e.target.value })
                  : (e) =>
                      setSigninData({ ...signupData, email: e.target.value })
              }
            />
            <Input
              label="Password"
              placeholder="Create password"
              onChange={
                type === "signup"
                  ? (e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                  : (e) =>
                      setSigninData({ ...signupData, password: e.target.value })
              }
            />

            <button className="bg-black text-white w-full py-2 rounded-md">
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
