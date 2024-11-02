import React from "react";

function ContinueButton() {
  return (
    <section className="flex relative flex-col items-start px-9 w-full text-lg font-medium mt-10 text-stone-50">
      <button className="relative self-stretch px-16 py-2.5 whitespace-nowrap bg-blue-700 rounded-xl">
        Continue
      </button>
    </section>
  );
}

export default ContinueButton;