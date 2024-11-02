import React from 'react';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import LogoImg from '../../../assets/logo-img.png'
import LogoText from '../../../assets/logo-text.png'
import { Link } from 'react-router-dom';
function SignUpPage() {
  return (
    <main className="flex overflow-hidden flex-col bg-[#f6f4eb">
      <div className='flex flex-col w-[55%] ml-[22%] mt-[-10%]'>
        <img src={LogoImg} alt="" />
        <img src={LogoText} alt="" className='mt-[-77%] ml-2'/>
      </div>
      <SignUpForm />
      <Link to={'/login'}><Footer /></Link>
    </main>
  );
}

export default SignUpPage;