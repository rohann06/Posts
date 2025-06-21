import React from "react";
import { useReadContract, useWatchContractEvent } from "wagmi";
import { abi } from "@/lib/abi";
import PostCard from "./PostCard";
import Loading from "./Loading";

const AllPosts = () => {
  const {
    data: allPosts,
    isLoading,
    isError,
    refetch,
  } = useReadContract({
    abi,
    address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
    functionName: "getAllPosts",
    query: {
      // Polling configuration goes here
      refetchInterval: 2_000, // 15 seconds
      staleTime: 0, // Always consider data stale to force re-fetch
    },
  });

  // Listen for new post events
  useWatchContractEvent({
    address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
    abi,
    eventName: "PostCreated", // Replace with your actual event name
    onLogs: (logs) => {
      console.log("New post detected!", logs);
      // Small delay to ensure blockchain state is updated
      setTimeout(() => refetch(), 2000);
    },
  });

  // Type definition for posts
  type Post = {
    id: bigint;
    author: `0x${string}`;
    content: string;
    likes: bigint;
    dislikes: bigint;
  };

  // Type assertion with proper typing
  const posts = allPosts as Post[] | undefined;

  // Sort posts from newest to oldest based on the `id`
  const sortedPosts = posts
    ?.slice()
    .sort((a, b) => Number(b.id) - Number(a.id));

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center p-4">
        Error fetching posts. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sortedPosts?.length ? (
        sortedPosts.map((post) => (
          <div
            className="border-b border-stone-400 px-4 py-6  transition-colors"
            key={post.id.toString()}
          >
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <div className="text-center text-stone-500 py-10">
          No posts available. Be the first to post!
        </div>
      )}
    </div>
  );
};

export default AllPosts;
