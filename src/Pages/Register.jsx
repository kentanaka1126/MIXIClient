import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { googleLogin } from "../actions/auth";
import axios from "axios";
import MicrosoftLogin from "react-microsoft-login";

import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
  useGoogleOAuth,
} from "@react-oauth/google";
import { register } from "../actions/auth";
import { useDispatch } from "react-redux";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const generateError = (error) =>
    toast.error(error, { position: "bottom-right", theme: "dark" });

  const authHandler = (err, data) => {
    console.log(err, data);
  };
  const onGoogleLogin = useGoogleLogin({
    onSuccess: (token) => dispatch(googleLogin(token, navigate)),
    scope: "https://www.googleapis.com/auth/userinfo.profile",
    redirectUri: "http://localhost:3000",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(values.email, values.password, navigate));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div className="m-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <div className="m-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="m-2">
              <button
                type="submit"
                className="w-full py-3.5 text-base font-medium text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-black dark:hover:bg-black dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <hr className="sm:mx-auto sm:w-full sm:max-w-sm m-4" />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col">
          <button
            className="m-2 py-3.5 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={onGoogleLogin}
          >
            <img src="/img/google.png" className="w-6 h-6 mr-3" />
            <span>Continue with google</span>
          </button>
          <button className="m-2 py-3.5 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <img src="/img/microsoft.png" className="w-6 h-6 mr-3" />
            <span>Continue with microsoft</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
