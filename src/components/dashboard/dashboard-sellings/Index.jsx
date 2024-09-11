import React from "react";

import Image from "../../../assets/user.jpg";

export default function Index() {
  return (
    <div className="w-full p-5 rounded-3xl bg-mainGrey shadow-lg">
      <div className="py-5 flex justify-between">
        <h3 className="text-2xl font-bold">Product Sell</h3>
        <div className="flex gap-x-10">
          <form>
            <input
              className="p-2 rounded-md"
              type="text"
              placeholder="Search"
            />
          </form>
          <form>
            <select name="average" className="p-2 rounded-md" id="average">
              <option value="30day">Last 30 days</option>
            </select>
          </form>
        </div>
      </div>
      <table className="w-full">
        <thead className="shadow-sm">
          <tr className="text-left opacity-50">
            <th className="pb-2">Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-6 flex items-center">
              <div className="w-28 h-14">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={Image}
                  alt="#"
                />
              </div>
              <div className="ml-6">
                <h3 className="font-bold">Abstract 3D</h3>
                <p className="opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </td>
            <td>32 in stock</td>
            <td className="font-bold">$ 14.90</td>
            <td>20</td>
          </tr>
          <tr className="pb-4">
            <td className="pb-6 flex items-center">
              <div className="w-28 h-14">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={Image}
                  alt="#"
                />
              </div>
              <div className="ml-6">
                <h3 className="font-bold">Abstract 3D</h3>
                <p className="opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </td>
            <td>32 in stock</td>
            <td className="font-bold">$ 14.90</td>
            <td>20</td>
          </tr>
          <tr className="pb-4">
            <td className="pb-6 flex items-center">
              <div className="w-28 h-14">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={Image}
                  alt="#"
                />
              </div>
              <div className="ml-6">
                <h3 className="font-bold">Abstract 3D</h3>
                <p className="opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </td>
            <td>32 in stock</td>
            <td className="font-bold">$ 14.90</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
