import React from "react";
import { Link } from "react-router-dom";

export default function First() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="text-8xl text-center font-bold my-4">Mixi</h1>
        <div className="text-center text-gray-600 my-4">
          <div className="text-sm">
            Welcome to Mixi! We're excited to have you on board.
          </div>
          <div className="text-sm">
            Let's get started and make your experience amazing.
          </div>
          <div className="text-sm">
            Setting up your account is quick and easy.
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl min-w-80 m-auto my-4">
          <Link to="/login" className="block mt-2 ml-2 mr-2 flex items-center">
            <img src="/img/Login@2x.png" width="28px" height="28px" className="mr-4 ml-2"/>
            <span className="text-gray-700 font-bold">Login</span>
            <svg
              className="w-[48px] h-[48px] text-gray-800 dark:text-white inline-block ml-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="m10 16 4-4-4-4"
              />
            </svg>
          </Link>
          <hr className="border-gray-300 border-t-2 mx-2" />
          <Link
            to="/register"
            className="block mt-2 ml-2 mr-2 flex items-center"
          >
            <img src="/img/Create account@2x.png" width="28px" height="28px" className="ml-2 mr-4"/>

            <span className="text-gray-700 font-bold">Create Account</span>
            <svg
              className="w-[48px] h-[48px] text-gray-800 dark:text-white inline-block ml-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="m10 16 4-4-4-4"
              />
            </svg>
          </Link>
          <hr className="border-gray-300 border-t-2 mx-2" />
          <Link to="/forgot" className="block m-2 flex items-center">
            <img src="/img/Forgot password@2x.png" width="28px" height="28px" className="ml-2 mr-4"/>
            <span className="text-gray-700 font-bold">Forgot Password</span>
            <svg
              className="w-[48px] h-[48px] text-gray-800 dark:text-white inline-block ml-auto"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="m10 16 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
