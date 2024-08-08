import React from "react";
import Form from "../../components/form/Form";
import { GoNorthStar } from "react-icons/go";
// import hand from "../assets/hand.png"

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen items-center justify-center gap-10 lg:gap-20 p-4 lg:p-0 ">
      <div className="bg-sky-600 px-6 py-12 lg:px-10 lg:py-20 rounded-3xl text-center lg:text-left ">
        <div>
          <GoNorthStar className="text-5xl lg:text-7xl text-white font-semibold" />
          <h1 className="text-white text-4xl lg:text-7xl font-semibold mt-6 lg:mt-10">
            Hello <br />
            SaleSkip!
            {/* <img src={hand} alt="" /> */}
          </h1>
          <p className="text-white mt-6 lg:mt-10 font-semibold text-base lg:text-lg">
            Skip repetitive and manual sales-marketing
            <br />
            tasks.Get highly productive through automation
            <br />
            and save tons of time!
          </p>
          <div>
            <p className="text-gray mt-10 lg:mt-40 text-sm lg:text-base">
              &copy; 2022 SaleSkip. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 ">
        <Form />
      </div>
    </div>
  );
};

export default Login;
