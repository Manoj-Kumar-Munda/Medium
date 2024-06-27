import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b bg-amber-100 border-black fixed top-0 left-0 right-0 z-50 px-4 md:px-[5%] py-3">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl font-hero">Medium</h1>

        <ul className="flex gap-6 items-center">
          <li>
            <Link to={"/auth/signin"}>Sign in</Link>
          </li>
          <li>
            <Link to={"/auth/signup"} className="text-white bg-black px-4 py-3 rounded-2xl">Get started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
