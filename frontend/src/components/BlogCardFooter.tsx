import { SlCalender } from "react-icons/sl";
import { FaHandsClapping } from "react-icons/fa6";
import { FaComment, FaSave } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
const BlogCardFooter = () => {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex items-center gap-6">
        <div className="flex gap-4 items-center">
          <SlCalender size={12} color="gray" />
          <span className="text-sm text-gray-500">Jun 5</span>
        </div>

        <div className="flex gap-1 items-center">
          <FaHandsClapping size={12} color="gray" />
          <span className="text-sm text-gray-500">80</span>
        </div>

        <div className="flex gap-1 items-center">
          <FaComment size={14} color="gray" />
          <span className="text-sm text-gray-500">112</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
          <FaSave size={14} color="gray" />
          <HiDotsHorizontal color="gray"/>
      </div>
    </div>
  );
};

export default BlogCardFooter;
