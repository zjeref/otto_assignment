import React from "react";
import logo from "../../assets/logo.svg";
import { useAtom } from "jotai";
import { user } from "../../helpers/global-state";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useAtom(user);

  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-full flex justify-between max-w-8xl py-4 px-4 text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-xl font-bold">Trade Planet</p>
        </div>
        <div>
          {currentUser ? (
            <p>{currentUser.name}</p>
          ) : (
            <p className="px-6 py-2 rounded-full bg-bluee cursor-pointer">
              Get Started
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
