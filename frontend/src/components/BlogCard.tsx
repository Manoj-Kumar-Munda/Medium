import BlogCardFooter from "./BlogCardFooter";
import { BlogCardHeader } from "./BlogCardHeader";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="space-y-3 px-2 border-b">
      <BlogCardHeader authorName={authorName} />
      <div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className=" text-gray-500 line-clamp-2 text-sm">{content}</p>

          <BlogCardFooter publishedDate={publishedDate} />
        </div>

        {/* <div className="self-start basis-32">
          <img src={blog1} alt="blog" className="aspect-video w-full" />
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
