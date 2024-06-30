import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "./useBlogs";

export const useBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  const [error, setError] = useState<boolean | string>(false);

  const fetchBlog = async () => {
    try {
      const res = await axios.get("/api/v1/blog/" + id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      console.log(res?.data);
      
      const data = res?.data;
      setBlog(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return {
    loading,
    blog,
    error,
  };
};
