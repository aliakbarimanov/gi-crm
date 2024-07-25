import React from "react";
import Form from "../components/Form";
import { GoNorthStar } from "react-icons/go";

const Login = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center gap-20 ">
      <div className="bg-white px-10 py-20 rounded-3xl bg-sky-600 ">
        <div>
          <GoNorthStar className="text-7xl text-white font-semibold " />
          <h1 className="text-white text-7xl font-semibold mt-10">
            Hello <br />
            SaleSkip!{" "}
          </h1>
          <p className="text-white mt-10 font-semibold">
            Skip repetitive and manual sales-marketing
            <br />
            tasks.Get highly productive through automation
            <br />
            and save tons of time!
          </p>
          <div>
            <p className="text-gray mt-40">
              &copy; 2022 SaleSkip. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center lg:w-1/2 ">
        <Form />
      </div>
    </div>
  );
};

export default Login;
