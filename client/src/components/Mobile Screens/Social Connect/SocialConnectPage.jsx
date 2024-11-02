import React from "react";
import Header from "./Header";
import InputField from "./InputField";
import ContinueButton from "./ContinueButton";
import { Link } from 'react-router-dom'
function SocialConnectPage() {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-stone-100 max-w-[480px]">
      <Link to={'/certifications'}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a159dadb6347f73a3ead4b76adf34d418f1cbe9741cc9f6e02b1800a5d2d14c5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b" className="object-contain mt-7 ml-3 w-10 aspect-square" alt="" />
      </Link>
      <div className="flex flex-col px-2 mt-1.5 w-full">
        <Header />
        <h1 className="mt-5 text-3xl ml-20 font-medium text-black">Social Connect</h1>
        <InputField label="LinkedIn" placeholder="eg: www.linkedin.com/profileid" />
        <InputField label="GitHub" placeholder="eg: www.github/profile.com" />
        <ContinueButton />
      </div>
    </main>
  );
}

export default SocialConnectPage;