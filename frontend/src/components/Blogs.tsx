import useBlogs from "../hooks/useBlogs";
import BlogCard from "./BlogCard";
interface BlogSchema {
  title: string;
  author: string;
  content: string;
}
const Blogs = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading || !blogs) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error} </h1>;
  }
  return (
    <div className=" max-w-screen-md w-full mx-auto px-2">
      <h2 className="text-3xl font-bold font-hero my-6">Blogs</h2>

      <div className="flex flex-col gap-4">
        {blogs.map((item: BlogSchema) => (
          <BlogCard
            title={item?.title}
            authorName={item?.author}
            content={item?.content}
            publishedDate="4th Jun, 2024"
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
