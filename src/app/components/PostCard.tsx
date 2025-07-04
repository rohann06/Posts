import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Blockies from "react-blockies";
import { TbArrowBigUpFilled, TbArrowBigDownFilled } from "react-icons/tb";
import { useWriteContract } from "wagmi";

const PostCard = ({ post }: { post?: any }) => {
  const { writeContract } = useWriteContract();
  const postId = post?.id?.toString();
  const pathName = usePathname();

  const likeDislikeButton = (abi: any) => {
    writeContract({
      abi,
      address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
      functionName: { abi },
      args: [postId],
    });
  };

  return (
    <div className=" py-5">
      <Link
        href={` ${pathName === "/" ? `addressPosts/${post?.author}` : null} `}
      >
        <div className=" flex items-center gap-x-2">
          <Blockies size={7} seed={post?.author} className=" rounded-full" />
          <p className=" underline font-semibold text-zinc-400">{`${post?.author?.slice(0, 6)}...${post?.author?.slice(-4)}`}</p>
        </div>
      </Link>
      <div className=" pl-10 pt-5 pb-7">
        <p className=" font-bold text-[17px] text-wrap">{post?.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
