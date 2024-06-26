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
    <div className=" max-w-screen-md w-full mx-auto  ">
      <h2 className="text-3xl font-bold font-hero py-3 pl-2 md:py-6">Blogs</h2>

      <div className="pl-0 md:pl-4 flex flex-col gap-2 md:gap-4">
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
      </div>
    </div>
  );
};

export default Blogs;
