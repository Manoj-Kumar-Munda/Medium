import BlogCardFooter from "./BlogCardFooter";
import blog1 from "/blog-1.webp";
const BlogCard = () => {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600">Tari Ibaba</p>

      <div className="flex justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">
            5 new amazing Javascript features in ES15(2024) features
          </h2>
          <p className=" text-gray-500">
            5 juicy ES15 features with new functionality for cleaner and shorted
            javascript code in 2024.
          </p>

          <BlogCardFooter />
        </div>

        <div className="self-start basis-32">
          <img src={blog1} alt="blog" className="aspect-video w-full" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
