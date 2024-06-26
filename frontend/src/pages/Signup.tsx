import { useState } from "react";
import { SignupInput } from "@manojk999/medium-common";
import AuthHeader from "../components/AuthHeader";
import Input from "../components/Input";

const Signup = () => {
  const [signupData, setSignupData] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="grow basis-1/2 w-full">
      <div className="flex flex-col justify-center items-center h-full border border-white px-2 ">
        <div className="max-w-lg w-full">
          <AuthHeader type="signup" />
          <form className="my-4 space-y-3">
            <Input
              label="Name"
              placeholder="Enter your name"
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
            <Input
              label="Password"
              placeholder="Create password"
              type="password"
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />

            <button className="bg-black text-white w-full py-2 rounded-md">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
