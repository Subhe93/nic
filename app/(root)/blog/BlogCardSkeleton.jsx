import { Skeleton } from "antd";

export default function BlogCardSkeleton() {
  return (
    <div>
      <div className="bg-[#e2e2e2] rounded-[24px] mx-auto shadow-lg overflow-hidden md:max-w-[450px] md:min-w-[450px] md:min-h-[512px]">
        {/* Image Placeholder */}
        <div className="relative md:min-w-[450px] md:h-[300px]">
          <Skeleton.Image className="md:min-w-[450px] md:h-[300px] min-w-[350px] min-h-[225px]" active />
        </div>
        {/* Title Placeholder */}
        <div className="p-4">
          <Skeleton.Input style={{ width: "80%", height: "24px" }} active />
        </div>
        {/* Paragraph Placeholder */}
        <div className="px-4 pb-4">
          <Skeleton
            active
            paragraph={{ rows: 3, width: ["100%", "100%", "80%"] }}
          />
        </div>
      </div>
    </div>
  );
}
