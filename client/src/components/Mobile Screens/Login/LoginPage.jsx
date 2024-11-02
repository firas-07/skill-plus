import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col pt-4 mx-auto w-full bg-[#f6f4eb] max-w-[480px]">
      <Header />
      <LoginForm />
    </main>
  );
}

export default LoginPage;