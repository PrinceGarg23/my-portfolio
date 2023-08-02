import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Your Name</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/skills" className="hover:text-blue-300">Skills</Link></li>
          <li><Link to="/work-experience" className="hover:text-blue-300">Work Experience</Link></li>
          <li><Link to="/education" className="hover:text-blue-300">Education</Link></li>
          <li><Link to="/contact-form" className="hover:text-blue-300">Contact Form</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
