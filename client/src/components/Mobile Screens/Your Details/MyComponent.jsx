import React from "react";
import ProfileImage from "./ProfileImage";
import InputField from "./InputField";
import ContinueButton from "./ContinueButton";
import {Link} from 'react-router-dom'
function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-[#f6f4eb] max-w-[480px]">
      <Link to={'/signup'}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a159dadb6347f73a3ead4b76adf34d418f1cbe9741cc9f6e02b1800a5d2d14c5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b"
          className="object-contain self-start mt-7 ml-3 w-10 aspect-square"
          alt="User profile"
        />
      </Link>
      <main className="flex flex-col items-center px-2 mt-1.5 w-full">
        <ProfileImage />
        <h1 className="mt-6 text-3xl font-medium text-black">Your Details</h1>
        <InputField
          label="Enter Your Degree"
          placeholder="eg: Bachelor of Engineering"
        />
        <InputField
          label="Enter Your Specification"
          placeholder="eg: Computer Science Engineering"
        />
        <ContinueButton />
      </main>
    </div>
  );
}

export default MyComponent;