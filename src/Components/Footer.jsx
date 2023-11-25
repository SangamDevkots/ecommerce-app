import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Our Store</h2>
          <p className="text-gray-400">123 Main Street, Cityville</p>
          <p className="text-gray-400">Email: info@example.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="mt-2">
            <li className="mb-1">
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-gray-300">Products</a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex mt-2">
            <a href="#" className="text-gray-400 hover:text-gray-300 mr-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
