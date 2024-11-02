import React from "react";
import Header from "./Header";
import SignUpMobileForm from "./SignUpMobileForm";
import {Link} from 'react-router-dom'

function SignUpMobilePage() {
  return (
    <main className="flex overflow-hidden flex-col pt-4 mx-auto w-full bg-[#f6f4eb] max-w-[480px]">
      <Link to='/signup'>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a159dadb6347f73a3ead4b76adf34d418f1cbe9741cc9f6e02b1800a5d2d14c5?placeholderIfAbsent=true&apiKey=15630d8a7aee4fc69f4720f636fae31b" className="object-contain self-start mt-4 ml-3 w-10 aspect-square" alt="Logo" />
      </Link>
      <Header />
      <SignUpMobileForm />
    </main>
  );
}

export default SignUpMobilePage;