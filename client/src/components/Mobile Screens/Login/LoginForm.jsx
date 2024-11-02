import React from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
function LoginForm() {
  const navigate = useNavigate();
    const gotoHomePage = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (!email || !password) alert("Email and Password cannot be Empty");
        signInWithEmailAndPassword(database, email, password)
          .then(() => {
            navigate('/home')
          }).catch(err => {
            alert(err.code)
          })
    
      };
  return (
    <form className="flex flex-col items-center w-full" onSubmit={(e)=>{ gotoHomePage(e) }}>
      <div className="self-start mt-16 ml-12">
        <label htmlFor="email" className="text-xl text-black">
          Enter Your Email
        </label>
      </div>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        className="px-2 py-2.5 mt-4 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-black w-[347px]"
      />
      <div className="self-start mt-10 ml-12">
        <label htmlFor="password" className="text-xl text-black">
          Enter Your Password
        </label>
      </div>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        className="px-2 py-2.5 mt-4 max-w-full text-base font-medium bg-white rounded-xl border border-black border-solid text-black w-[347px]"
      />
      <button
        type="submit"
        className="px-16 py-2.5 mt-14 w-full text-lg font-medium whitespace-nowrap bg-blue-700 rounded-xl max-w-[347px] text-stone-50"
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;