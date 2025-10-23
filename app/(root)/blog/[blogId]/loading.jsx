import SkeletonImage from "antd/es/skeleton/Image"
import SkeletonInput from "antd/es/skeleton/Input";
import SkeletonNode from "antd/es/skeleton/Node";
import { Skeleton } from "antd";
export default function Loading(){
    return (
      <>
        <div className="md:px-14 mx-3 md:mx-7 md:pb-7 pt-14 pb-7 px-3 font-Main md:pt-24 rounded-b-3xl bg-[#D2D4FF] mb-7">
          <SkeletonInput active />
        </div>
        <div className="grid md:grid-cols-[900px_1fr] grid-cols-1 gap-4 relative   ">
          <div className="p-4 flex flex-col gap-20">
            <SkeletonImage
              active
              shape="circle"
              className=" rounded-[24px] md:min-h-[490px] md:min-w-[900px] bg-[#e2e2e2]"
            />

            <div>
              <Skeleton className="  md:min-w-[900px]" active />
            </div>

            <div>
              <Skeleton className="  md:min-w-[900px]" active />
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-10  ">
            <SkeletonNode
              active
              className="min-h-[350px] min-w-[200px] rounded-[24px]"
            />
            <SkeletonNode
              active
              className="min-h-[350px] min-w-[200px] rounded-[24px]"
            />
          </div>
        </div>
      </>
    );
}