import React from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

import Profile from "../components/Profile";
import Calendar from "../components/Calendar";
import Reminder from "../components/Reminder";

const Home = () => {
  return (
    <div className="py-5 flex justify-center gap-x-2.5">
      <div className="shadow-xl">
        <div className="w-896 p-1 border flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <div>
              <FaCalendarAlt />
            </div>
            <span>Calendar</span>
          </div>
          <button className="flex items-center gap-x-1">
            <div>
              <FaRegCalendarCheck />
            </div>
            <span>add appointment</span>
          </button>
        </div>
        <Profile />
        <Calendar />
      </div>
      <Reminder />
    </div>
  );
};

export default Home;
