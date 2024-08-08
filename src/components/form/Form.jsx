import React from "react";

const Form = () => {
  return (
    <div className="bg-white px-6 py-12 lg:px-10 lg:py-20 rounded-3xl w-full max-w-md mx-auto">
      <h1 className="text-3xl lg:text-5xl font-semibold">SaleSkip</h1>
      <h1 className="text-3xl lg:text-5xl font-semibold mt-4">Welcome Back!</h1>
      <p className="font-medium text-base lg:text-lg text-gray-500 mt-4">
        Don't have an account?{" "}
        <a href="" className=" text-blue-950 border-b border-gray-600">
          Create a new account now,
        </a>
        <br />
        it's FREE! Takes less than a minute.
      </p>
      <div className="mt-8">
        <div className="mb-6">
          <label className="text-base lg:text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-3 lg:p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="text-base lg:text-lg font-medium">Password</label>
          <input
            type="password"
            className="w-full border-2 border-gray-100 rounded-xl p-3 lg:p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center mb-4 lg:mb-0">
            <input type="checkbox" id="remember" className="mr-2" />
            <label className="font-medium text-base lg:text-lg" for="remember">
              Remember for 30 days
            </label>
          </div>
          <button className="text-violet-500 text-base lg:text-lg font-medium">
            Forgot password
          </button>
        </div>
        <div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button className=" active:scale-[.98] active:duratione-75 hover:scale-[1.01] ease-in-out  transition-all  py-3 rounded-xl bg-violet-500 text-white text-base lg:text-lg font-bold">
              Login Now
            </button>
            {/* <button className="flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 "> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="#4285F4"
                  d="M21.75 11.16c0-.71-.06-1.38-.18-2.04H12v3.86h5.36c-.23 1.25-.92 2.3-1.93 3.06v2.55h3.11c1.82-1.68 2.87-4.14 2.87-7.43z"
                />
                <path
                  fill="#34A853"
                  d="M12 22c2.6 0 4.77-.86 6.34-2.34l-3.11-2.54c-.86.58-1.97.92-3.23.92-2.49 0-4.59-1.68-5.34-3.95H1.14v2.46C4.16 20.42 7.76 22 12 22z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.66 13.3c-.14-.42-.21-.87-.21-1.33s.07-.91.21-1.33V8.18H3.39a11.94 11.94 0 0 0 0 7.64l3.27-2.52z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.31 0 2.49.45 3.42 1.32l2.57-2.57C16.76 1.1 14.47 0 12 0 7.32 0 3.34 3.24 1.14 7.73l3.27 2.52c.77-2.35 2.85-4.25 5.59-5.5z"
                />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg> */}
              {/* Sign in with Google */}
            {/* </button> */}
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base lg:text-lg">Don't have an account</p>
            <button className="text-violet-500 text-base lg:text-lg font-medium ml-2">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
