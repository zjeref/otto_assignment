import React, { useState } from "react";
import logo from "../assets/logo.svg";
import FormField from "../component/login/FormField";

const Signup = () => {
  const [name, setName] = useState("");

  return (
    <div className="w-full max-w-8xl min-h-screen flex justify-center bg-black">
      <div className="w-full flex">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex space-x-12 items-center">
            <img className="w-20 h-20" src={logo} alt="logo" />
            <h1 className="text-4xl font-bold text-whitee">Trade Planet</h1>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full bg-whitee px-7 py-8 max-w-md rounded-xl">
            <div>
              <h1 className="text-3xl font-bold text-greyy p-4">Sign up</h1>
              <p className="text-greyy font-bold p-4">
                New user?{" "}
                <span className="text-bluee font-medium">
                  Create an account
                </span>
              </p>
            </div>
            <form className="p-4">
              <FormField
                name="Full Name"
                type="text"
                placeholder="Enter your full name"
                getData={setName}
              />
              <div className="text-end my-4">
                <button className="font-medium px-4 py-1 bg-bluee text-whitee rounded-full">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
