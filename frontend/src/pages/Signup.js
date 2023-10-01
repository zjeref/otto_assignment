import React, { useState } from "react";
import SideHero from "../component/common/SideHero";
import SignupForm from "../component/signup/SignupForm";

const Signup = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-blackk">
      <div className="w-full flex max-w-8xl ">
        <SideHero />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
