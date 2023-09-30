import React, { useState, useId, useEffect } from "react";

const FormField = ({
  name,
  type,
  value,
  placeholder,
  validationFunc,
  validationText,
  getValidation,
  getData,
}) => {
  const [data, setData] = useState("");
  const [isValidated, setIsValidated] = useState(true);
  const id = useId();


  useEffect(() => {
    if(data) {
      getData(data);
      setIsValidated(validationFunc(data))
      getValidation(isValidated);
    }
  }, [data]);

  return (
    <>
      <label htmlFor={`${name}-${id}`} className="flex flex-col border-b-[1px]">
        <span className="text-sm capitalize text-greyy3 font-bold">{name}</span>
        <input
          type={type}
          id={`${name}-${id}`}
          placeholder={placeholder || ""}
          className="input-form"
          value={value}
          onChange={(e) => setData(e.target.value)}
        />
      </label>
      {!isValidated && <p className="text-xs text-red-600">{validationText}</p>}
    </>
  );
};

export default FormField;
