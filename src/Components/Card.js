import React from "react";
import { update } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { handleToken } from "../actions/stripe";
import Stripe from "react-stripe-checkout";
import { stripeKey } from "../utils/constants";

export default function Card(props) {
  const dispatch = useDispatch();

  const { title, price, requests, workspaces, apps, isSelected } = props;

  const user = useSelector((store) => store.auth.user);

  const tokenHandler = (token) => {
    dispatch(handleToken(price, token, { ...user, subscription: price }));
  };

  return (
    <div
      className="w-full m-2 p-1 bg-white border border-gray-200 rounded-lg shadow p-8 dark:bg-gray-800 dark:border-gray-700"
      style={{ maxWidth: "330px" }}
    >
      <h5 className="text-2xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-2xl font-semibold">$</span>
        <span className="text-4xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <div className="flex items-baseline my-4 text-gray-500 dark:text-white">
        <span className="text-sm font-semibold">{requests}</span>
        <span className="text-sm font-semibold">monthly requests</span>
      </div>
      <Stripe stripeKey={stripeKey} token={tokenHandler}>
        <button
          type="button"
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className={
            isSelected
              ? "bg-gray-300 text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              : "text-white bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          }
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Choose"}
        </button>
      </Stripe>

      <hr className="sm:mx-auto sm:w-full border-t-2 w-sm m-4" />
      <h5 className="text-base font-medium text-gray-500 dark:text-gray-400">
        Workspaces:{workspaces} workspaces
      </h5>
      <h5 className="text-base font-medium text-gray-500 dark:text-gray-400">
        Apps per Workspace:
        <span className="text-blue-400">{apps} apps</span>
      </h5>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className="h-5 w-5 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Full integration with all apps
          </span>
        </li>
        <li className="flex">
          <svg
            className="h-5 w-5 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Multi-step actionable widgets
          </span>
        </li>
        <li className="flex">
          <svg
            className="h-5 w-5 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Social media management
          </span>
        </li>
        <li className="flex">
          <svg
            className="h-5 w-5 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Task management tools
          </span>
        </li>
        <li className="flex">
          <svg
            className="h-5 w-5 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Automation & Insights
          </span>
        </li>
        <li className="flex">
          <svg
            className="h-5 w-5 text-gray-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" /> <path d="M9 12l2 2l4 -4" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            Mixi-Intelligent Assistent
          </span>
        </li>
      </ul>
    </div>
  );
}
