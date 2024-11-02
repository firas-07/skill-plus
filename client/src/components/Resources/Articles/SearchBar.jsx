import React from "react";

function SearchBar() {
  return (
    <form className="flex justify-end gap-10 md:px-6 md:py-4 p-2 text-lg font-medium bg-white rounded-3xl text-zinc-500 md:pl-5">
      <input
        type="text"
        id="search"
        placeholder="Search with keyword"
        className="bg-transparent border-none outline-none text-[16px]"
      />
      <button type="submit" aria-label="Search" className="w-[23px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da0f2083d750cb487cfdff7642ea5d5749034350ec9f4e38b9d1ca87fb1a8c13?placeholderIfAbsent=true&apiKey=ee2b05a1b4fb470485852e4a897cb916" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      </button>
    </form>
  );
}

export default SearchBar;