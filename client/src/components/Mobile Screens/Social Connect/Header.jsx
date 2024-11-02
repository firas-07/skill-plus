import React from "react";

function Header() {
  return (
    <header className="flex gap-10">
      <div className="flex flex-col ml-24 grow shrink-0 items-start basis-0 w-fit">
        <div className="flex shrink-0 mt-16 ml-12 rounded-xl border-black border-solid bg-zinc-300 bg-opacity-0 border-[3px] h-[106px] w-[106px]">
          <i className="fa-solid fa-rocket text-6xl mt-5 ml-5"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;