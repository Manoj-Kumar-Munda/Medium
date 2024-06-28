interface BlogCardHeaderProps {
  authorName: string;
}

export const BlogCardHeader = ({ authorName }: BlogCardHeaderProps) => {
  return (
    <div className="inline-flex gap-2 items-center">
      <Avatar authorName={authorName} size={8} fontSize="sm"/>
      <span className="text-xs text-gray-500 font-medium">{authorName}</span>
    </div>
  );
};

interface AvatarProps extends BlogCardHeaderProps {
  size: number;
  fontSize: "sm" | "lg"
}
export const Avatar = ({ authorName, size = 8, fontSize }: AvatarProps) => {
  return (
    <div className={`w-${size} h-${size} overflow-hidden rounded-full bg-gray-500 border inline-flex items-center justify-center`}>
      <span className={`text-${fontSize}  font-bold text-white`}>{authorName[0]}</span>
    </div>
  );
};
