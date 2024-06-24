import { Link } from "react-router-dom";
import Input from "./Input";

const Form = ({ type }: { type: "signup" | "signin" }) => {
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
            { type==="signup" && <Input label="Name" placeholder="Enter your name" />}
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Password" placeholder="Create password" />

            <button className="bg-black text-white w-full py-2 rounded-md">
              { type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
