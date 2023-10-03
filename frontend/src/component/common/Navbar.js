import React from "react";
import logo from "../../assets/logo.svg";
import { useAtom } from "jotai";
import { user } from "../../helpers/global-state";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

const Navbar = () => {
  const [currentUser, setCurrentUser] = useAtom(user);
  const navigate = useNavigate();
  
  

  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-full flex justify-between max-w-8xl py-4 px-4 text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-xl font-bold">Trade Planet</p>
        </div>
        <div>
          {currentUser ? (
            <p className="font-semibold cursor-pointer" onClick={()=> Cookies.remove("authToken")}>Logout</p>
          ) : (
            <p className="px-6 py-2 rounded-full bg-bluee cursor-pointer" onClick={()=> navigate("/login")}>
              Get Started
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
