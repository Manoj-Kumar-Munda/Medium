import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  console.log(localStorage.getItem("accessToken"));

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/signin");
    }
  }, []);

  return <div>Home</div>;
};

export default Home;
