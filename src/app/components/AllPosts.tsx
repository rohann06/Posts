import React from "react";
import { useReadContract } from "wagmi";
import { abi } from "@/lib/abi";
import PostCard from "./PostCard";
import Loading from "./Loading";

const AllPosts = () => {
  const {
    data: allPosts,
    isLoading,
    isError,
  } = useReadContract({
    abi,
    address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
    functionName: "getAllPosts",
  });

  // Type assertion to inform TypeScript that `data` is a string array
  const posts = allPosts as
    | {
        id: bigint;
        author: string;
        content: string;
        likes: bigint;
        dislikes: bigint;
      }[]
    | undefined;

  // Sort posts from newest to oldest based on the `id`
  const sortedPosts = posts
    ?.slice()
    .sort((a, b) => Number(b.id) - Number(a.id));

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (isError) return <div>Error fetching posts. Please try again later.</div>;

  console.log("Sorted result", sortedPosts);

  return (
    <div>
      {sortedPosts?.length ? (
        sortedPosts.map((post, i) => (
          <div className="border-b border-stone-400 px-10" key={i}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div>No Posts available</div>
      )}
    </div>
  );
};

export default AllPosts;
