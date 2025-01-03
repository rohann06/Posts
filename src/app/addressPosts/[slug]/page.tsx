"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Blockies from "react-blockies";
import { abi } from "@/lib/abi";
import { useReadContract } from "wagmi";
import { Hex } from "viem";
import UserPosts from "@/app/components/UserPosts";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

const AddressPage = () => {
  const params = useParams(); // Access route parameters
  const id = params?.slug as Hex;

  // Fetching the IDs of posts
  const { data: postId, isLoading: isLoadingUserPosts } = useReadContract({
    abi,
    address: "0x2d981D33fE07922027F600B0B588a95e8494E528",
    functionName: "getUserPosts",
    args: [id],
  });

  console.log("postId", postId);
  // console.log("postDetails", postDetails);
  return (
    <div className="md:mx-[26%] border-l-2 border-r-2 h-screen border-stone-400">
      <div className="border-b border-zinc-500">
        <Link href={"/"}>
          <IoArrowBack />
        </Link>
        <div className="flex items-center gap-x-2 justify-center py-5">
          <Blockies size={8} seed={id?.toString()} className="rounded-full" />
          <p className="text-[28px] text-zinc-400 font-semibold">{`${id?.slice(0, 6)}...${id?.slice(-5)}`}</p>
        </div>
      </div>
      {postId?.map((id) => {
        return <UserPosts key={Number(id)} id={Number(id)} />;
      })}
    </div>
  );
};

export default AddressPage;
