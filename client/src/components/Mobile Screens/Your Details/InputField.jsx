import React from "react";

function InputField({ label, placeholder }) {
  return (
    <>
      <label className="self-start mt-5 ml-10 text-xl text-black">
        {label}
      </label>
      <input
        type="text"
        className="px-2 py-2.5 mt-4 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-stone-300 w-[347px]"
        placeholder={placeholder}
        aria-label={label}
      />
    </>
  );
}

export default InputField;