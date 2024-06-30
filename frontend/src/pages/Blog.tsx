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
    <div className="my-4 space-y-4 mx-2 md:mx-6">
      <div className="flex gap-2 items-center">
        <Avatar authorName={blog?.author?.name as string} className="w-8 h-8" />
        <span className="font-medium text-gray-500">
          {blog?.author?.name}
        </span>
      </div>
      <h1 className="text-3xl font-extrabold">{blog?.title}</h1>
      <p className="text-lg">{blog?.content}</p>
    </div>
  );
};

export default Blog;
