import React from "react";
import { useReadContract } from "wagmi";
import { abi } from "@/lib/abi";

const AllPosts = () => {
  const result = useReadContract({
    abi,
    address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
    functionName: "getAllPosts",
  });
  console.log("result", result);
  return <div>All Posts</div>;
};

export default AllPosts;
