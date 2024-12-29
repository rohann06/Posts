import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center my-20">
      <AiOutlineLoading3Quarters className=" text-xl animate-spin" />
    </div>
  );
};

export default Loading;
