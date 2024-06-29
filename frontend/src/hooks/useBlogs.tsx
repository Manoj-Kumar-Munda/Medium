import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
  "content": string;
  "title": string;
  "id": string;
  "author": {
    "name": string | null;
  }
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog []>([]);
  const [error, setError] = useState<boolean | string>(false);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/v1/blog/all", {
        headers: {
            Authorization: "Bearer "+localStorage.getItem("accessToken")
        }
      });
      console.log(res);
      const data = res?.data?.blogs;
      setBlogs(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return {
    loading,
    blogs,
    error,
  };
};

