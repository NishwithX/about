import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-customBg space-y-6">
  <div>
    <h1 className="text-5xl text-textbg max-w-md mx-auto">Hello</h1>
  </div>

  <h3 className="text-lg text-textbg max-w-md mx-auto text-center">
    Student, Programmer, Linux user;
    <br />
    I'm a self-taught software developer who's very passionate about Linux &
    I like to build cool stuff but haven't built anything yet ;)
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


  );
}

export default Home;
