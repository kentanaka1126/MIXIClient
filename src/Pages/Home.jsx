import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Components/Card";

const Types = [
  {
    title: "Basic Plan",
    price: "49",
    requests: "10000",
    workspaces: "Up to 3",
    apps: "Up to 3",
  },
  {
    title: "Professional Plan",
    price: "79",
    requests: "20000",
    workspaces: "Up to 5",
    apps: "Up to 5",
  },
  {
    title: "Premium Plan",
    price: "149",
    requests: "40000",
    workspaces: "Unlimited",
    apps: "Unlimited",
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex w-screen min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="text-3xl text-center font-bold ">Mixi</h1>
        <div className="text-center text-gray-600 my-2">
          <div className="text-sm my-2">
            We've got a plan that's perfect for you.
          </div>
          <div className="text-xs my-2">
            Not sure? Request a{" "}
            <span className="underline">3 day free trial</span>*no credit card
            required.
          </div>
        </div>
        <div
          className="flex flex-wrap w-full"
          style={{ justifyContent: "inherit" }}
        >
          {Types.map((item) => (
            <Card
              {...item}
              key={item.price}
              isSelected={user.subscription == item.price}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
          ;
        </div>
      </div>
    </div>
  );
}
