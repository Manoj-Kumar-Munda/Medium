import axios from "axios";
import { FormEvent, useState } from "react";

const WriteBlog = () => {
  const [data, setData] = useState({ title: "", content: "" });

  const onSubmit = async(e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data?.title);
    console.log(data?.content);

    const res = await axios.post("/api/v1/blog", data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log(res);
    
  };
  return (
    <div className="max-w-screen-md mx-auto my-4 px-2">
      <form className="flex flex-col gap-2 pb-4" onSubmit={onSubmit}>
        <div className="my-2 ">
          <input
            className="outline-none text-5xl font-hero placeholder:font-hero px-1 sm:px-3 w-full"
            placeholder="Title"
            onChange={(e) => setData({...data, title: e.target.value})}
          />
        </div>

        <div className="min-h-80">
          <textarea
            rows={10}
            className="h-full font-Poppins text-2xl px-1 sm:px-3 outline-none w-full placeholder:font-hero"
            placeholder="Write your story..."
            onChange={(e) => setData({...data, content: e.target.value})}
          />
        </div>

        <button className=" border w-full rounded-md py-2 bg-gray-500 text-white">
          Publish
        </button>
      </form>
    </div>
  );
};

export default WriteBlog;
