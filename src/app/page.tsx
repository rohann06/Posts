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
    <div className=" md:mx-[26%] border-l-2 border-r-2 h-full border-stone-400">
      <div>
        <Navbar />
      </div>
      <div>
        <AddPosts />
      </div>
      <div>
        <AllPosts />
      </div>
    </div>
  );
}

export default App;
