import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className=" max-w-screen-md w-full mx-auto px-2">
      <h2 className="text-3xl font-bold font-hero my-6">Blogs</h2>

      <div className="flex flex-col gap-4">
        <BlogCard
          authorName="Wu Sheng"
          title="The resume that got a software engineer a $300,000 job at Google."
          publishedDate="Jun 5 , 2024"
          content="My name is Alex Nguyen and I previously worked as a software engineer at Amazon and Microsoft before joining Google."
        />

        <BlogCard
          authorName="Wu Sheng"
          title="The resume that got a software engineer a $300,000 job at Google."
          publishedDate="Jun 5 , 2024"
          content="My name is Alex Nguyen and I previously worked as a software engineer at Amazon and Microsoft before joining Google."
        />

        <BlogCard
          authorName="Wu Sheng"
          title="The resume that got a software engineer a $300,000 job at Google."
          publishedDate="Jun 5 , 2024"
          content="My name is Alex Nguyen and I previously worked as a software engineer at Amazon and Microsoft before joining Google."
        />
      </div>
    </div>
  );
};

export default Blogs;
