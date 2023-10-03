import { useAtom } from "jotai";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { symbol } from "../../helpers/global-state";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSymbol, setCurrentSymbol] = useAtom(symbol)

  return (
    <div className="bg-secondary text-white overflow-y-auto flex select-none">
      <input
        type="search"
        placeholder="Search Index/ETFs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 text-black focus:outline-none"
      />
      <p className="bg-white text-bluee text-2xl flex items-center px-2 cursor-pointer" onClick={()=> setCurrentSymbol(searchTerm)}>
        <AiOutlineSearch />
      </p>
    </div>
  );
};

export default Search;
