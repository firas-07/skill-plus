import React, { useState } from 'react';
import Google from '../../../assets/icons/google.png'
import { database } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
function SignUpForm() {
  var [successMob, setSucessMob] = useState(false)
  const navigate = useNavigate()
  const handleSubmitMob = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(database, email, password)
      .then(() => {
        e.target.password.value = "";
        e.target.email.value = "";
        setSucessMob(true)
      }).catch(err => {
        alert(err.code)
      })
  }
  return (
    <div>
      <Link to={'https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'}>
        <div className='flex gap-3 border-2 border-black w-fit p-1 rounded-xl items-center justify-center ml-[30%] mt-[-23%]'>
          <img src={Google} alt="" className='w-4' />
          <h1 className='font-medium text-[12px]'>Sign Up with Google</h1>
        </div>
      </Link>
      <Link to={'/signupmobile'}>
        <div className='flex gap-3 border-2 border-black w-fit p-1 px-2 rounded-xl items-center justify-center ml-[30%] mt-3'>
          <i class="fa-solid fa-phone text-sm"></i>
          <h1 className='font-medium text-[12px]'>Sign Up with Mobile</h1>
        </div>
      </Link>
      <div className='mx-5 mt-2 flex gap-3 items-center'>
        <div className='h-[2px] w-[40%] bg-black'></div>
        <h1 className='font-medium'>OR</h1>
        <div className='h-[2px] w-[45%] bg-black'></div>
      </div>
      <div className='mx-5 mt-1 font-medium'>
        <h1>Full Name</h1>
        <input type="text" placeholder='Enter Your name' className='text-sm px-2 mt-1 py-1 w-full outline-none border-2 border-black rounded-xl' />
      </div>
      <form action="" onSubmit={(e) => { handleSubmitMob(e) }}>
        <div className='mx-5 mt-1 font-medium'>
          <h1>Email</h1>
          <input name='email' type="email" placeholder='Enter Your email' className='text-sm px-2 mt-1 py-1 w-full outline-none border-2 border-black rounded-xl' />
        </div>
        <div className='mx-5 mt-1 font-medium'>
          <h1>Password</h1>
          <input name='password' type="password" placeholder='Enter Your password' className='text-sm px-2 mt-1 py-1 w-full outline-none border-2 border-black rounded-xl' />
        </div>
        <div className='mx-5 mt-5 font-medium'>
          <button className='text-center p-1 w-full bg-[#004EEC] text-white rounded-xl'>Submit</button>
        </div>
      </form>
      {/* Success Section to delete */}
      <div style={successMob ? { display: "block" } : { display: "none" }} className='absolute bg-white shadow-xl text-center flex flex-col gap-5 text-gray-800 p-5 text-sm shadow-gray-400 top-[35%] md:top-[40%] left-[25%] md:left-[37%] w-fit md:w-[30%] md:h-[25%]'>
        <i class="fa-solid fa-circle-check text-4xl md:text-5xl md:mb-5"></i>
        <p className='font-bold md:text-2xl'>Registered Successfully!</p>
        <button onClick={() => { setSucessMob(false); navigate('/yourdetails') }} className='mt-5 bg-green-600 p-1 px-2 text-white'>Continue</button>
      </div>
    </div>
  );
}

export default SignUpForm;