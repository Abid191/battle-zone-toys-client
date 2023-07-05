// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 md:px-0 px-3">
      <h1 className="text-[13rem] text-gray-500">404</h1>
      
      <h1 className="text-4xl font-bold text-gray-600 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium transition duration-300 hover:bg-blue-600">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
