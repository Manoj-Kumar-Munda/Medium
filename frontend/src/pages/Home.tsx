import Hero from "../components/Hero";
import Blogs from "../components/Blogs";

const Home = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  if (!isLoggedIn) {
    return <Hero />;
  }
  
  return (
    <Blogs />
  );
};

export default Home;
