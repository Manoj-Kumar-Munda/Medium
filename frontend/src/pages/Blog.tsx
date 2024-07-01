import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { Avatar } from "../components/BlogCardHeader";

const Blog = () => {
  const { id } = useParams();
  console.log(id);

  const { blog, loading, error } = useBlog(id as string);
  console.log(blog);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className=" my-4 mx-2 grid grid-cols-12 px-2 sm:px-4 md:px-8 gap-4 md:gap-6">
      <div className=" order-2 md:order-1 col-span-12 md:col-span-8 space-y-3">
        <h1 className="text-3xl font-extrabold">{blog?.title}</h1>
        <p className="text-gray-400">Posted on August 24, 2024</p>
        <p className="text-lg">{blog?.content}</p>
      </div>

      <div className="order-1 col-span-4 lg:p-4 space-y-2">
        <h1 className="hidden md:block text-xl text-gray-500 font-medium">Author</h1>
        <div className="flex gap-2 justify-start items-center">

          <Avatar
            authorName={blog?.author?.name || "Anonymous"}
            className="px-4 w-8 h-8 self-start"
          />
          <div>
            <span className=" text-2xl font-extrabold ">
              {blog?.author?.name}
            </span>
            <p className="text-gray-600 hidden md:block">
              Random catch phrase about the author's ability to grab the user's
              attention
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
