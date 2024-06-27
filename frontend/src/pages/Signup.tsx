import { FormEvent, useState } from "react";
import { SignupInput } from "@manojk999/medium-common";
import AuthHeader from "../components/AuthHeader";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/user/signup", signupData);
      console.log(res);
      const jwt = res.data.token;

      localStorage.setItem("accessToken", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing up");
    }
  };

  return (
    <div className="grow basis-1/2 w-full">
      <div className="flex flex-col justify-center items-center h-full border border-white px-2 ">
        <div className="max-w-lg w-full">
          <AuthHeader type="signup" />
          <form className="my-4 space-y-3" onSubmit={(e) => submitHandler(e)}>
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
