import React from "react";
import logo from "../assets/logo.svg";

const SideHero = () => {
  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="flex space-x-12 items-center">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <h1 className="text-4xl font-bold text-whitee">Trade Planet</h1>
      </div>
    </div>
  );
};

export default SideHero;
