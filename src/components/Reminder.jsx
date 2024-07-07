import React, { useEffect, useState } from "react";

import { CiAlarmOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";

import axios from "axios";

const Reminder = () => {
  const [showEmptyData, setShowEmptyData] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    data.data ? setShowEmptyData(false) : setShowEmptyData(true);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:8000/data")
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <div className="w-448 border rounded-md shadow-xl">
      <div className=" py-2 border flex items-center gap-x-2">
        <CiAlarmOn className="ml-2" />
        <span>Daily View</span>
      </div>
      <div className="p-4 border-b-2">
        <form className="flex justify-end items-center gap-x-2">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            className="p-1 shadow-md border rounded-sm"
            placeholder="Type for search."
            autoComplete="off"
          />
          <button>
            <IoIosSearch />
          </button>
        </form>
      </div>
      <div>
        <div
          className={
            showEmptyData ? "block p-4 border-b-2 text-center" : "hidden"
          }
        >
          No data available in table!
        </div>
        <div>
          <ul className="py-4">
            {data.map((item, id) => (
              <li className="py-2 border-b-2 flex items-center" key={id}>
                <div className="p-2 text-red-600">
                  <GiAutoRepair />
                </div>
                <div>
                  <p>{item.description}</p>
                  <span>{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4">
        <div className="mb-4 text-center">
          Showing
          <span> 0 </span>
          to
          <span> 0 </span>
          of
          <span> {data.length} </span>
          entries.
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="p-3 border cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="px-4 py-2 border border-gray-300 bg-gray-300 cursor-pointer">
            1
          </div>
          <div className="p-3 border cursor-pointer">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
