import { Link } from "react-router-dom";
import BlogCardFooter from "./BlogCardFooter";
import { BlogCardHeader } from "./BlogCardHeader";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="space-y-3 px-2 border-gray-50 border p-2 rounded-lg border-gray-00 bg-white/20 backdrop-blur-lg backdrop-opacity-10">
      <BlogCardHeader authorName={authorName} />
      <Link to={"/blogs/"+id}>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className=" text-gray-500 line-clamp-2 text-sm my-2">{content}</p>

          <BlogCardFooter publishedDate={publishedDate} />
        </div>

        {/* <div className="self-start basis-32">
          <img src={blog1} alt="blog" className="aspect-video w-full" />
        </div> */}
      </Link>
    </div>
  );
};

export default BlogCard;
