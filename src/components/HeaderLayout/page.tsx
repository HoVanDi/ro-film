"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginPage from "@/src/components/Login/page";
import Header from "./Header";

export default function Page() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header setShowLogin={setShowLogin} />
      <AnimatePresence>
        {showLogin && (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <LoginPage onClose={() => setShowLogin(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
