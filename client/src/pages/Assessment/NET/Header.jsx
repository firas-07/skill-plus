import React from 'react';
import NavMenu from './NavMenu';

function Header() {
  return (
    <header className="flex z-10 flex-wrap gap-10 w-full max-w-[1296px] max-md:max-w-full">
      <nav className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex grow text-xl font-medium text-black whitespace-nowrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7748123dbd33a9a4ebd9d65d9de1142cb5c4cc2382d1ecb6abd1c7e216a6fd6c?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"
                alt=""
                className="object-contain grow shrink-0 aspect-[2.46] basis-0 w-fit"
              />
              <div className="flex flex-col self-start mt-9">
                <div>Home</div>
                <div className="shrink-0 border-black border-solid border-[3px] h-[3px]" />
              </div>
            </div>
          </div>
          <NavMenu />
        </div>
      </nav>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ba24f5c7a177ce6fe18a3b007111701a988f17cd4d9fb99df4e24eb2a77e926?placeholderIfAbsent=true&apiKey=a6343008e88b41f389a2cf613b0f8c75"
        alt=""
        className="object-contain shrink-0 my-auto aspect-square w-[45px]"
      />
    </header>
  );
}

export default Header;