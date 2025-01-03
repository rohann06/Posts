import { abi } from "@/lib/abi";
import React from "react";
import { useReadContract } from "wagmi";
import PostCard from "./PostCard";
import Loading from "./Loading";

const UserPosts = ({ id }: { id: any }) => {
  //   Fetching the IDs of posts
  const { data: posts, isLoading: isLoadingUserPosts } = useReadContract({
    abi,
    address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
    functionName: "getPost",
    args: [id],
  });

  if (isLoadingUserPosts) return <Loading />;

  return (
    <div className="pt-12">
      <div className=" border-b border-stone-400 px-10 ">
        <PostCard post={posts} />
      </div>
    </div>
  );
};

export default UserPosts;
