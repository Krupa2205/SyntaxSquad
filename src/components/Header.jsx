import React, { useState } from "react";
import { motion } from "framer-motion";
import { useClerk, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"; // Import Clerk components

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSignIn } = useClerk(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  return (
    <header className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/Bganimation.mp4"
        autoPlay
        loop
        muted
      ></video>

      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-50 backdrop-blur-sm z-20">
        <div className="text-white text-3xl font-bold cursor-pointer hover:text-blue-500">
          Syntax Squad
        </div>

        <div className="flex items-center space-x-4">
          {/* Show profile button if signed in, otherwise show sign-in button */}
          <SignedOut>
            <button
              onClick={openSignIn}
              className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-bold"
            >
              Sign In
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          className="absolute top-[4.5rem] right-0 h-[70vh] w-64 bg-black bg-opacity-70 z-30 shadow-lg text-white font-extrabold"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-start py-4 px-6 space-y-6 overflow-y-auto">
            <motion.button
              className="block text-lg hover:text-blue-500 transition-colors"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Home
            </motion.button>
            <motion.button
              className="block text-lg hover:text-purple-500 transition-colors"
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              About Us
            </motion.button>
            <motion.button
              className="block text-lg hover:text-yellow-300 transition-colors"
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.button>
            <motion.button
              className="block text-lg hover:text-red-400 transition-colors"
              onClick={() => scrollToSection("achievements")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Achievements
            </motion.button>
            <motion.button
              className="block text-lg hover:text-red-400 transition-colors"
              onClick={() => scrollToSection("top-builders")}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Top-Builders
            </motion.button>
          </div>
        </motion.div>
      )}

      <div
        id="home"
        className="relative z-10 flex flex-col items-center space-y-6 mt-16"
      >
        <motion.img
          src="/Logo.jpg"
          alt="Syntax Squad Logo"
          className="h-32 w-32 rounded-full shadow-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.h1
          className="text-3xl sm:text-6xl font-bold tracking-wide text-center text-white cursor-pointer"
          style={{ fontFamily: "Kanit, sans-serif" }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            color: "#4DA1A9",
          }}
        >
          Welcome to the <span className="text-blue-500">Syntax Squad</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl text-white font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          Empowering Developers. Building Futures.
        </motion.p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:translate-y-1 hover:shadow-md active:translate-y-2 active:shadow-inner font-bold">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;
