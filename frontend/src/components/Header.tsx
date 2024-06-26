import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "./BlogCardHeader";
import { cn } from "../utils/utils";

const Header = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
  };
  return (
    <div
      className={cn(
        "border-b  border-black top-0 left-0 right-0 z-50  py-3 bg-white px-4 relative",
        !isLoggedIn && "fixed bg-amber-100 px-4 md:px-[5%]"
      )}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl font-hero">
          <Link to={"/"}>Medium</Link>
        </h1>

        <ul className="flex gap-4 items-center">
          {isLoggedIn ? (
            <>
              <li>
                <Link to={"/new-story"}>Write</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Sign out</button>
              </li>
              <li>
                <Avatar authorName="Wu Sheng" className="w-10 h-10" />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/auth/signin"}>Sign in</Link>
              </li>
              <li>
                <Link
                  to={"/auth/signup"}
                  className="text-white bg-black px-4 py-3 rounded-2xl"
                >
                  Get started
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
