import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const greetings = [
    { word: "Hello", name: "Nishwith", im: "I'm" },        // English
    { word: "नमस्ते", name: "निश्विथ", im: "मैं हूँ" },    // Hindi
    { word: "ನಮಸ್ಕಾರ", name: "ನಿಶ್ವಿತ್", im: "ನಾನು" },    // Kannada
    { word: "വണക്കം", name: "നിഷ്വിത്", im: "ഞാൻ" },      // Malayalam
    { word: "வணக்கம்", name: "நிஷ்வித்", im: "நான்" },    // Tamil
    { word: "హలో", name: "నిశ్విత్", im: "నేను" },        // Telugu
    { word: "হ্যালো", name: "নিশ্বিথ", im: "আমি" },       // Bengali
    { word: "Hallo", name: "Nishwith", im: "Ich bin" },    // German
    { word: "こんにちは", name: "ニシュウィス", im: "私は" },  // Japanese
    { word: "Bonjour", name: "Nishwith", im: "Je suis" },  // French
    { word: "Hola", name: "Nishwith", im: "Soy" },         // Spanish
    { word: "Привет", name: "Нишвит", im: "Я" },           // Russian
    { word: "你好", name: "尼施维斯", im: "我是" },          // Chinese
    { word: "Hola", name: "Nishwith", im: "Soy" },         // Mexican (same as Spanish)
    { word: "안녕하세요", name: "니시위스", im: "저는" },     // Korean
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === greetings.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [greetings.length]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-customBg">
      {/* Main content area that grows and centers content */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6">
        <div className="text-center">
          <h1 className="text-6xl text-textbg mb-4">
            {greetings[currentIndex].word}
          </h1>
          <h1 className="text-4xl text-textbg">
            <span className="text-textbg">{greetings[currentIndex].im}</span>{' '}
            <span className="text-white">{greetings[currentIndex].name}</span>
          </h1>
        </div>
        <h3 className="text-1xl text-textbg max-w-md mx-auto text-center px-6 sm:px-8 leading-relaxed">
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
      
      {/* Footer fixed to bottom */}
      <footer className="text-footercolor text-center py-4">
        © 2024 nishwith
      </footer>
    </div>
  );
}

export default Home;