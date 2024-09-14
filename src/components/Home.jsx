import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const words = [
    "Hello",        // English
    "नमस्ते",       // Hindi
    "ನಮಸ್ಕಾರ",     // Kannada
    "വണക്കം",      // Malayalam
    "வணக்கம்",      // Tamil
    "హలో",         // Telugu
    "হ্যালো",       // Bengali
    "Hallo",        // German
    "こんにちは",    // Japanese (Konnichiwa)
    "Bonjour",      // French
    "Hola",         // Spanish
    "Привет",       // Russian (Privet)
    "你好",          // Chinese (Ni hao)
    "Hola",         // Mexican (same as Spanish)
    "안녕하세요",     // Korean (Annyeonghaseyo)
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [words.length]);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-customBg">
      <div className="flex-grow flex flex-col items-center justify-center space-y-6">
        <div>
          <h1 className="text-5xl text-textbg max-w-md mx-auto">
            {words[currentWordIndex]}
          </h1>
        </div>
        <h3 className="text-lg text-textbg max-w-md mx-auto text-center px-6 sm:px-8 leading-relaxed">
          I'm <span className="text-white" style={{ textShadow: '0 0 20px #ffffff' }}>Nishwith</span>
          <br />
          Student, Programmer, Linux user;
          <br />
          I'm a self-taught software developer who's very passionate about Linux & I like to build cool stuff but haven't built anything yet ;)
        </h3>

        <div className="text-center">
          <nav className="mb-6">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link
                  to="/blog"
                  className="bg-black text-white border border-white py-2 px-4 rounded hover:bg-gray-800"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="bg-black text-white border border-white py-2 px-4 rounded hover:bg-gray-800"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="bg-black text-white border border-white py-2 px-4 rounded hover:bg-gray-800"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <footer className="text-footercolor text-center py-4 ">
        © 2024 nishwith
      </footer>
    </div>
  );
}

export default Home;
