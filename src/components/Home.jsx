import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/blog" className="text-blue-500 hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
            <li><Link to="/projects" className="text-blue-500 hover:underline">Prtojects</Link></li>

          </ul>
        </nav>
        <h3 className="text-lg text-gray-700 max-w-md mx-auto">
          Student, Programmer, Linux user;<br />
          I'm a self-taught software developer who's very passionate about Linux & I like to build cool stuff but haven't built anything yet ;)
        </h3>
      </div>
    </div>
  );
}

export default Home;