import { useState } from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestion === questionIndex) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionIndex);
    }
  };

  return (
    <div className=" py-10 px-4">
      <Helmet>
        <title>Battle Zone Toys | Blogs</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
            Blogs
          </h1>
          <div className="space-y-5">
            {/* Question 1 */}
            <div className="bg-gray-100 rounded-lg shadow-xl">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleQuestion(0)}
              >
                <h2 className="text-lg font-bold text-gray-700">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h2>
                <svg
                  className={`w-8 h-8 text-gray-600 ml-auto transform ${
                    activeQuestion === 0 ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current text-gray-700"
                    d="M7 10l5 5 5-5z"
                  />
                </svg>
              </button>
              {activeQuestion === 0 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-justify">
                    In order to access protected resources on behalf of a user,
                    an access token is a type of credential. It serves as an
                    authentication mechanism and is often fleeting. When the
                    previous access token expires, a refresh token is a
                    credential that is used to get a new one. Together, they
                    enable safe and streamlined application authentication and
                    authorization. Both tokens must be safely kept on the client
                    side, possibly in a local storage device or an HTTP-only
                    cookie.
                  </p>
                </div>
              )}
            </div>

            {/* Question 2 */}
            <div className="bg-gray-100 rounded-lg shadow-xl">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleQuestion(1)}
              >
                <h2 className="text-lg font-bold text-gray-700">
                  Compare SQL and NoSQL databases?
                </h2>
                <svg
                  className={`w-8 h-8 text-gray-600 ml-auto transform ${
                    activeQuestion === 1 ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current text-gray-700"
                    d="M7 10l5 5 5-5z"
                  />
                </svg>
              </button>
              {activeQuestion === 1 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-justify">
                    SQL (Structured Query Language) and NoSQL (Not Only SQL)
                    databases are two types of database management systems.
                    Relational databases known as SQL databases are used to
                    store structured data in tables that follow a predetermined
                    schema. On the other hand, NoSQL databases hold unstructured
                    or semi-structured data in a number of different formats,
                    including key-value pairs, documents, and graphs. In terms
                    of scalability, flexibility, and data modeling, they present
                    various trade-offs.
                  </p>
                </div>
              )}
            </div>

            {/* Question 3 */}
            <div className="bg-gray-100 rounded-lg shadow-xl">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleQuestion(2)}
              >
                <h2 className="text-lg font-bold text-gray-700">
                  What is express js? What is Nest JS?
                </h2>
                <svg
                  className={`w-8 h-8 text-gray-600 ml-auto transform ${
                    activeQuestion === 2 ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current text-gray-700"
                    d="M7 10l5 5 5-5z"
                  />
                </svg>
              </button>
              {activeQuestion === 2 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-justify">
                    Express.js is a fast and minimalist web application
                    framework for Node.js. It offers a comprehensive collection
                    of capabilities, such as routing, middleware support, and
                    request/response handling, for developing web servers and
                    APIs. It is frequently employed in the creation of RESTful
                    APIs and server-side applications.
                     <br />

                    Nest.js is a progressive Node.js framework for building
                    efficient and scalable server-side applications. It is
                    constructed using TypeScript for improved productivity and
                    maintainability on top of Express.js. With a modular
                    architecture, dependency injection, decorators, and strong
                    routing capabilities, Nest.js offers these characteristics.
                  </p>
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div className="bg-gray-100 rounded-lg shadow-xl">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleQuestion(3)}
              >
                <h2 className="text-lg font-bold text-gray-700">
                  What is MongoDB aggregate and how does it work?
                </h2>
                <svg
                  className={`w-8 h-8 text-gray-600 ml-auto transform ${
                    activeQuestion === 3 ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="fill-current text-gray-700"
                    d="M7 10l5 5 5-5z"
                  />
                </svg>
              </button>
              {activeQuestion === 3 && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-justify">
                  MongoDB  aggregate is a powerful aggregation framework that allows complex data manipulations and analysis within the database. To carry out actions like filtering, grouping, sorting, merging, and aggregating data, it offers a set of operators and phases. As a result, fewer queries or processing operations in the application code are required to conduct sophisticated data transformations and computations in the database.

                  </p>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
