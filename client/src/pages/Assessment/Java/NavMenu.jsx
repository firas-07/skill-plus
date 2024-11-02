import React from 'react';

function NavMenu() {
  return (
    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex gap-7 items-center self-stretch my-auto w-full text-xl font-medium text-black max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch my-auto">Courses</div>
        <div className="grow shrink self-stretch my-auto w-[84px]">Resources</div>
        <form className="flex gap-2 self-stretch px-5 py-2 bg-white rounded-[30px] text-zinc-500">
          <label htmlFor="search" className="sr-only">Search</label>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da0f2083d750cb487cfdff7642ea5d5749034350ec9f4e38b9d1ca87fb1a8c13?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"
            alt=""
            className="object-contain shrink-0 self-start w-6 aspect-square"
          />
          <input
            type="search"
            id="search"
            placeholder="search here"
            className="basis-auto bg-transparent border-none outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default NavMenu;