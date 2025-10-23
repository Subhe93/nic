import SkeletonImage from "antd/es/skeleton/Image";
import  {Skeleton}  from "antd";
export default function BlogCardSkeleton ()  {
  return (
    <div className="md:min-w-[430px] md:min-h-[425px] relative mb-5">
      <SkeletonImage
        active
      />
      <div className="w-3/4 bg-blackk min-h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 rounded-xl px-10 py-5">
        <Skeleton active paragraph={{ rows: 2 }} />
      </div>
    </div>
  );
};
