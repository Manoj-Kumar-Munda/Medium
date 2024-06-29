
import { ClassNameValue, twMerge } from 'tailwind-merge'

interface BlogCardHeaderProps {
  authorName: string;
}

export const BlogCardHeader = ({ authorName }: BlogCardHeaderProps) => {
  return (
    <div className="inline-flex gap-2 items-center">
      <Avatar authorName={authorName} className = "w-8 h-8"/>
      <span className="text-xs text-gray-500 font-medium">{authorName}</span>
    </div>
  );
};

interface AvatarProps extends BlogCardHeaderProps {
  className : ClassNameValue
}
export const Avatar = ({ authorName, className }: AvatarProps) => {
  return (
    <div className={ twMerge('overflow-hidden rounded-full bg-gray-500 border inline-flex items-center justify-center', className)}>
      <span className={`text-sm  font-bold text-white`}>{authorName[0]}</span>
    </div>
  );
};
