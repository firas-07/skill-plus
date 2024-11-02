import React from "react";

function Header() {
  return (
    <header className="flex flex-col items-center px-2 w-full">
      <div className="flex shrink-0 mt-8 rounded-xl border-black border-solid bg-zinc-300 bg-opacity-0 border-[3px] h-[90px] w-[90px]" role="img" aria-label="Decorative image"></div>
      <i class="fa-solid fa-user absolute text-4xl top-32"></i>
      <h1 className="mt-5 text-3xl font-medium text-black">SignUp with Mobile</h1>
    </header>
  );
}

export default Header;