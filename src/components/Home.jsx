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
    <div className="flex flex-col h-screen bg-customBg">
      <div className="flex-grow flex flex-col items-center justify-center space-y-4 px-4">
        <h1 className="text-4xl sm:text-5xl text-textbg">
          {words[currentWordIndex]}
        </h1>
        <h3 className="text-sm sm:text-base text-textbg max-w-md text-center leading-tight">
          I'm <span className="text-white" style={{ textShadow: '0 0 20px #ffffff' }}>Nishwith</span>
          <br />
          Student, Programmer, Linux user;
          <br />
          I'm a self-taught software developer who's very passionate about Linux & I like to build cool stuff but haven't built anything yet ;)
        </h3>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            {["Blog", "Contact", "Projects"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="bg-black text-white border border-white py-1 px-2 text-sm rounded hover:bg-gray-800"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <footer className="text-footercolor text-center py-2 text-sm">
        © 2024 nishwith
      </footer>
    </div>
  );
}

export default Home;