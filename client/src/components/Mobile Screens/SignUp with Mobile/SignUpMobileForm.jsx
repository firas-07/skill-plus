import React from "react";

function SignUpMobileForm() {
  return (
    <form className="flex flex-col items-center w-full">
      <div className="self-start mt-16 ml-8">
        <label htmlFor="email" className="text-xl ml-5 text-black">
          Enter Your Number
        </label>
      </div>
      <input
        id="email"
        type="number"
        placeholder="Enter your Number"
        className="px-2 py-2.5 mt-4 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-black w-[347px]"
      />
      <div className="self-start mt-10 ml-8">
        <label htmlFor="password" className="text-xl ml-5 text-black">
          Enter Your OTP
        </label>
      </div>
      <input
        id="password"
        type="password"
        placeholder="Enter your OTP"
        className="px-2 py-2.5 mt-4 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-black w-[347px]"
      />
      <button
        type="submit"
        className="px-16 py-2.5 mt-14 w-full text-lg font-medium whitespace-nowrap bg-blue-700 rounded-xl max-w-[347px] text-stone-50"
      >
        Continue
      </button>
    </form>
  );
}

export default SignUpMobileForm;