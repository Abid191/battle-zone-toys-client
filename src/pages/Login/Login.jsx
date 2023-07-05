// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import GoogleLogin from "../Shared/GoogleLogin";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const { singInWithEmail } = useContext(AuthContext);
  const [show, setShow] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleShowPass = () => {
    setShow(!show);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singInWithEmail(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Login success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong. Please Provide valid Information.",
        });
      });
  };
  return (
    <div className="mt-5 mb-10">
      <Helmet>
        <title>Battle Zone Toys | Login</title>
      </Helmet>
      <div className="card flex-shrink-0 md:w-1/2 w-full mx-auto  shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-3xl font-semibold text-gray-600 mb-3">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-form"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              name="password"
              type={show ? "password" : "text"}
              placeholder="Password"
              className="input-form mb-2"
              required
            />

            <div className="absolute mt-12 right-5 cursor-pointer">
              {show ? (
                <FaEyeSlash
                  onClick={handleShowPass}
                  className="w-5 h-5 text-gray-500"
                />
              ) : (
                <FaEye
                  onClick={handleShowPass}
                  className="w-5 h-5 text-gray-600"
                />
              )}
            </div>

            <div className="label">
              <input
                className="checkbox checkbox-accent checkbox-sm mr-2"
                type="checkbox"
              />
              <p>Remember password</p>
            </div>
          </div>
          <div className="form-control">
            <button type="submit" className="button-primary w-full">
              Login
            </button>
          </div>
          <p className="mt-3">
            New to Battle Zone Toys?{" "}
            <Link
              to="/register"
              className="text-blue-500 link-hover cursor-pointer"
            >
              Create Account
            </Link>
          </p>

          <GoogleLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
