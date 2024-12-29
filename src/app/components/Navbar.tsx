import React from "react";
import { RiQuillPenFill } from "react-icons/ri";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between py-4 border-b border-stone-400 px-10">
      <div className=" flex items-center gap-x-1 font-bold text-[30px]">
        Posts{" "}
        <span>
          <RiQuillPenFill />
        </span>
      </div>
      <div>
        <ConnectButton
          label={`Connect`}
          chainStatus="none"
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          showBalance={false}
        />
      </div>
    </div>
  );
};

export default Navbar;
