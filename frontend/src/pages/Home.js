import React, { useState } from "react";
import Trending from "../component/home/Trending";
import Chart from "../component/home/Chart";
import Search from "../component/home/Search";
import Trigger from "../component/home/Trigger";
import AddTrigger from "../component/home/AddTrigger";
import { useAtom } from "jotai";
import { user } from "../helpers/global-state";

const Home = () => {
  const [currentUser, setCurrentUser] = useAtom(user);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex space-x-8 m-6">
      <div className="absolute text-white z-20">
        <label>
          <span>Auto Refresh</span>
          <input type="checkbox" value={toggle} onChange={(e)=> setToggle(e.target.checked)} />
        </label>
      </div>
      <div className="w-3/4">
        <AddTrigger>
          <Chart autoRefresh={toggle} />
        </AddTrigger>
      </div>
      <div className="w-1/4 space-y-6">
        <Search />
        <Trending />
        {currentUser && <Trigger />}
      </div>
    </div>
  );
};

export default Home;
