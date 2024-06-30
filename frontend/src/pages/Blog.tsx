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
    <div className="my-4 mx-2 grid grid-cols-12 px-2 sm:px-4 md:px-8 gap-6">
      <div className=" order-2 md:order-1 col-span-12 md:col-span-8 space-y-3">
        <h1 className="text-3xl font-extrabold">{blog?.title}</h1>
        <p className="text-lg">{blog?.content}</p>
      </div>

      <div className="order-1 col-span-4 lg:p-4 space-y-2">
        <h1 className="text-lg text-gray-500 font-medium">Author</h1>
        <div className="flex gap-2 items-center">
          <Avatar
            authorName={blog?.author?.name as string}
            className="w-8 h-8"
          />
          <span className="font-medium text-gray-500">
            {blog?.author?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
