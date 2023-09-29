import React, { useState, useId, useEffect } from "react";

const FormField = ({ name, type, placeholder, getData }) => {
  const [data, setData] = useState("");
  const id = useId();

  useEffect(() => {
    getData(data);
  }, [data]);

  return (
    <label htmlFor={`${name}-${id}`} className="flex flex-col border-b-[1px]">
      <span className="text-sm capitalize text-greyy3 font-bold">{name}</span>
      <input
        type={type}
        id={`${name}-${id}`}
        placeholder={placeholder || ""}
        className="input-form"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </label>
  );
};

export default FormField;
