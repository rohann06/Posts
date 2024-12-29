import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";

const AddPosts = () => {
  const [post, setPost] = useState("");
  const { writeContract } = useWriteContract();
  const account = useAccount();

  return (
    <div className=" py-10 border-b border-stone-400 px-10">
      <div className=" pb-2">
        <textarea
          maxLength={500}
          minLength={5}
          rows={4}
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder=" Write your thoughts...."
          className=" bg-transparent w-full border-2 border-zinc-600 rounded-[10px] outline-none p-5 font-medium"
        />
      </div>
      <div className=" flex items-center justify-between px-1">
        <p className=" text-sm text-zinc-600">{post.length}/500</p>
        <button
          onClick={() => {
            account.address &&
              writeContract({
                abi,
                address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
                functionName: "createPost",
                args: [post],
              });
          }}
          className={`flex items-center gap-x-1 bg-white rounded-[10px] py-1 px-5 text-black font-bold ${account.status == "disconnected" ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
        >
          Post <FaPlus className=" text-sm" />
        </button>
      </div>
    </div>
  );
};

export default AddPosts;
