import React from 'react';

function Footer() {
  return (
    <footer className="flex relative flex-col items-center px-20 pt-1.5 mt-9 w-full text-xl text-center">
      <p className="relative text-black w-[400px]">
        Already have an account?
      </p>
      <a href="#login" className="mt-2 underline text-blue-700">Login</a>
    </footer>
  );
}

export default Footer;