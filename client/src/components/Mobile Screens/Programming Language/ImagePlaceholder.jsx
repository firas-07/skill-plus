import React from "react";

function ImagePlaceholder() {
  return (
    <div
      className="flex shrink-0 mt-16 rounded-xl ml-5 border-black border-solid bg-zinc-300 bg-opacity-0 border-[3px] h-[90px] w-[90px]"
      role="img"
      aria-label="Image placeholder"
    >
      <i className="fa-solid fa-code text-5xl mt-5 ml-2"></i>
    </div>
  );
}

export default ImagePlaceholder;