import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "@/lib/abi";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddPosts = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { writeContract } = useWriteContract();
  const account = useAccount();

  const handlePost = async () => {
    if (!account?.address || post.trim().length < 5) return;
    if (!account) {
      toast.error("Please connect your walllet....!");
      return;
    }
    try {
      setLoading(true);
      // Start loading
      await writeContract({
        abi,
        address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
        functionName: "createPost",
        args: [post],
      });
      toast.loading("Posting.....!");
      setPost("");
      // Clear the input field after success
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Opps! something went wrong.....!");
    } finally {
      setLoading(false);
      toast.success("Done....!"); // End loading
    }
  };

  return (
    <form
      onSubmit={handlePost}
      className="py-10 border-b border-stone-400 px-10"
    >
      <div className="pb-2">
        <textarea
          maxLength={500}
          minLength={5}
          rows={4}
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write your thoughts...."
          className="bg-transparent w-full border-2 border-zinc-600 rounded-[10px] outline-none p-5 font-medium"
        />
      </div>
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-zinc-600">{post.length}/500</p>
        <button
          type="submit"
          className={`flex items-center gap-x-1 bg-white rounded-[10px] py-1 px-5 text-black font-bold ${
            account.status === "disconnected"
              ? "cursor-not-allowed opacity-40"
              : "cursor-pointer"
          }`}
          disabled={account.status === "disconnected"} // Disable button when loading
        >
          {loading ? (
            // Loading indicator
            <>
              <AiOutlineLoading3Quarters className=" animate-spin text-lg" />
            </>
          ) : (
            <>
              Post <FaPlus className="text-sm" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default AddPosts;
