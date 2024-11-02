import React from "react";

function LanguageInput() {
  return (
    <>
      <label htmlFor="languagesKnown" className="self-start mt-10 ml-10 text-xl font-medium text-black">
        Languages Known
      </label>
      <input
        id="languagesKnown"
        type="text"
        className="px-2 py-2.5 mt-4 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-stone-300 w-[347px]"
        placeholder="eg: Python, Java"
        aria-label="Enter languages known"
      />
    </>
  );
}

export default LanguageInput;