import SkeletonImage from "antd/es/skeleton/Image";

const BrandBlogSkeleton = () => {
  return (
    <div>
      {/* Use Skeleton.Image directly */}
      <SkeletonImage
        active
        className="relative w-full rounded-3xl  h-full min-w-[350px] md:min-w-[500px] md:min-h-[400px] min-h-[415px] lg:min-w-[600px] lg:min-h-[400px]  "
      />
    </div>
  );
};

export default BrandBlogSkeleton;
