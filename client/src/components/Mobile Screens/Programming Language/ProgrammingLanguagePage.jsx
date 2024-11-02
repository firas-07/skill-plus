import React from "react";
import LanguageInput from "./LanguageInput";
import ContinueButton from "./ContinueButton";
import ImagePlaceholder from "./ImagePlaceholder";
import { Link } from 'react-router-dom'
function ProgrammingLanguagePage() {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-stone-100 max-w-[480px]">
      <Link to={'/socialconnect'}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a159dadb6347f73a3ead4b76adf34d418f1cbe9741cc9f6e02b1800a5d2d14c5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b" className="object-contain mt-7 ml-3 w-10 aspect-square" alt="" />
      </Link>
      <section className="flex flex-col items-center px-2 mt-1.5 w-full">
        <div className="self-stretch">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col justify-center w-[84%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full ml-36">
                <ImagePlaceholder />
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-5 text-3xl font-medium text-black">
          Programming Language
        </h1>
        <LanguageInput />
        <ContinueButton />
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dbd80643fba0457fee70bf24c594090c9fd6d9217e3d7b14d55a267431e5ca5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b"
        alt=""
        className="object-contain mt-28 w-full aspect-[1.75]"
      />
    </main>
  );
}

export default ProgrammingLanguagePage;