"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import Navbar from "./components/Navbar";
import AddPosts from "./components/AddPosts";
import AllPosts from "./components/AllPosts";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className=" md:mx-[26%]">
      <div className=" border-b border-neutral-500 px-5">
        <Navbar />
      </div>
      <div className=" border-b border-neutral-500 px-5">
        <AddPosts />
      </div>
      <div className=" px-5">
        <AllPosts />
      </div>
    </div>
  );
}

export default App;
