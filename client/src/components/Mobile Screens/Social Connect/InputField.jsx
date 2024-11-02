import React from "react";

function InputField({ label, placeholder }) {
  return (
    <section>
      <h2 className="self-start mt-10 ml-5 text-xl text-black">{label}</h2>
      <input
        type="text"
        placeholder={placeholder}
        aria-label={label}
        className="self-center px-2 py-2.5 mt-2 ml-5 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-stone-300 w-[347px]"
      />
    </section>
  );
}

export default InputField;