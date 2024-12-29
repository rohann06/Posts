import { abi } from "@/lib/abi";
import React from "react";
import Blockies from "react-blockies";
import { TbArrowBigUpFilled, TbArrowBigDownFilled } from "react-icons/tb";
import { useWriteContract } from "wagmi";

const PostCard = ({ post }: { post: any }) => {
  const { writeContract } = useWriteContract();
  const postId = post.id.toString();
  console.log("postId", post.id.toString());

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
      <div className=" flex items-center gap-x-2">
        <Blockies size={7} seed={post?.author} className=" rounded-full" />
        <p className=" underline font-semibold text-zinc-400">{`${post?.author?.slice(0, 6)}...${post?.author?.slice(-4)}`}</p>
      </div>
      <div className=" pl-10 pt-5 pb-7">
        <p className=" font-bold text-[17px] text-wrap">{post?.content}</p>
      </div>
      <div className=" pl-10 flex items-center gap-x-5">
        <button
          onClick={() => likeDislikeButton("likePost")}
          className=" gap-x-1 flex items-center"
        >
          <TbArrowBigUpFilled className=" text-2xl hover:scale-110 duration-200 opacity-70" />
          <p className=" text-sm text-zinc-500 font-semibold">
            {post?.likes?.toString() || "0"}
          </p>
        </button>
        <button
          onClick={() => likeDislikeButton("dislikePost")}
          className=" gap-x-1 flex items-center"
        >
          <TbArrowBigDownFilled className=" text-2xl hover:scale-110 duration-200 opacity-70" />
          <p className=" text-sm text-zinc-500 font-semibold">
            {post?.dislikes?.toString() || "0"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
