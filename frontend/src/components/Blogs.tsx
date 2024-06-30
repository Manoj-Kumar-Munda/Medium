import { useBlogs } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading || !blogs) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error} </h1>;
  }
  return (
    <div className=" max-w-screen-md w-full mx-auto px-2 ">
      <h2 className="text-3xl font-bold font-hero py-6">Blogs</h2>

      <div className="flex flex-col gap-4">
        {blogs.map((item) => (
          <BlogCard
            key={item?.id}
            id={item?.id}
            title={item?.title}
            authorName={item?.author?.name || "Anonymous"}
            content={item?.content}
            publishedDate="4th Jun, 2024"
          />
        ))}
        {/* <BlogCard
          title="React: You are Using useEffect() Wrong, Do This Instead"
          authorName="Manoj Kumar"
          content="Once one decides to move forward with learning React, hooks are among the first things to learn (and to be frustrated with). Hooks are essential parts of React, as they were created to solve several problems that appeared in the first couple of versions of React, when every rendering was done inside the component’s lifecycle functions, such as componentDidMount(), componentWillMout(), componentDidUpdate()."
          publishedDate="Jun 5, 2024"
        /> */}
      </div>
    </div>
  );
};

export default Blogs;
