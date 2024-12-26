"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import Navbar from "./components/Navbar";
import Posts from "./components/(Posts)/Posts";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className=" md:mx-[26%]">
      <div className=" border-b border-neutral-500 px-5">
        <Navbar />
      </div>
      <div className=" px-5">
        <Posts />
      </div>
    </div>
  );
}

export default App;
