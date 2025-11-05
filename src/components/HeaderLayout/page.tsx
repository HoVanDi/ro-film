"use client";
import { useState } from "react";
import LoginPage from "@/src/components/Login/page";
import Header from "./Header";

export default function HeaderLayout() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header setShowLogin={setShowLogin} />
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </>
  );
}
