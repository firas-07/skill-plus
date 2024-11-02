import React from "react";

function Header() {
  return (
    <header className="flex flex-col items-center px-2 w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a159dadb6347f73a3ead4b76adf34d418f1cbe9741cc9f6e02b1800a5d2d14c5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b" className="object-contain self-start mt-4 ml-3 w-10 aspect-square" alt="Logo" />
      <div className="flex shrink-0 mt-8 rounded-xl border-black border-solid bg-zinc-300 bg-opacity-0 border-[3px] h-[90px] w-[90px]" role="img" aria-label="Decorative image"></div>
      <i class="fa-solid fa-user absolute text-4xl top-32"></i>
      <h1 className="mt-5 text-3xl font-medium text-black">Log In</h1>
    </header>
  );
}

export default Header;