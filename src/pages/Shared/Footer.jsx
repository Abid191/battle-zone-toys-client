// import React from 'react';
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img
              src="https://i.ibb.co/ft8gVhY/image-2-Ihtuhl3-transformed.png"
              alt="Website Logo"
              className="w-36 "
            />
            <h3 className="text-white font-semibold text-2xl">Battle Zone Toys</h3>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 space-y-1.5">
            <h4 className="text-lg text-white font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">House 24 Rd 29</p>
            <p className="text-gray-400">Dhanmondi 32, Dhaka 1299</p>
            <p className="text-gray-400">Phone: +8801875472180</p>
            <p className="text-gray-400">Email: Abidhasan5612@gmail.com</p>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h4 className="text-lg text-white font-bold mb-4">Follow Us</h4>
            <div className="flex">
              <a
                href="https://www.facebook.com/cloud.pieash/"
                className="text-gray-400 hover:text-white transition duration-300 mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-7 w-7"/>
              </a>
              <a
                href="https://twitter.com/Cloud_Pieash"
                className="text-gray-400 hover:text-white transition duration-300 mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-7 w-7"/>
              </a>
              <a
                href="https://github.com/pieash9"
                className="text-gray-400 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-7 w-7"/>
              </a>
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="bg-gray-800 text-white w-full px-4 py-2 rounded focus:outline-none focus:outline-gray-600 focus:outline-1"
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 ml-auto block transition duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-400  text-center text-lg">
            &copy; {new Date().getFullYear()} <a className="text-blue-400 cursor-pointer" href="https://github.com/Abid191">Abid191</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
