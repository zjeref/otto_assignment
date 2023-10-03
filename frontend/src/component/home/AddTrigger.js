import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddTrigger = ({ children }) => {
  const [tipToggle, setTipToggle] = useState(false);
  const [inputToggle, setInputToggle] = useState(false);
  const [mousex, setMousex] = useState(0);
  const [mousey, setMousey] = useState(0);

  const handleContext = (e) => {
    setInputToggle(false);
    setTipToggle(true);
    e.preventDefault();
    setMousex(e.clientX);
    setMousey(e.clientY);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setTipToggle(false);
    setInputToggle(false);
  };

  const openTrigger = (e) => {
    e.stopPropagation();
    setTipToggle(false);
    setInputToggle(true);
  };

  return (
    <div className="select-none" onContextMenu={handleContext} onClick={handleClick}>
      <p
        style={{ top: mousey, left: mousex }}
        className={`bg-black text-white w-max px-4 py-2 shadow-2xl absolute z-10 cursor-pointer hover:bg-blackk ${
          tipToggle ? "visible" : "hidden"
        }`}
        onClick={openTrigger}
      >
        Add price trigger
      </p>
      <div
        style={{ top: mousey, left: mousex }}
        className={`flex text-white w-max px-4 absolute z-10 cursor-pointer hover:bg-opacity-50  ${
          inputToggle ? "visible" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className="pl-2 py-1 text-black w-20 focus:outline-none"
          type="number"
          placeholder="add price"
        />
        <p className="flex items-center bg-white text-bluee pr-2">
          <AiOutlinePlus />
        </p>
      </div>
      {children}
    </div>
  );
};

export default AddTrigger;
