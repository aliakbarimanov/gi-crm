import React from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Profile from "../../components/profile/Profile";
import Calendar from "../../components/calendar/Calendar";
import Reminder from "../../components/reminder/Reminder";

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
          <div>
            <Link to="/appointment-form" style={{ textDecoration: 'none' }}>
              <button className="flex items-center gap-x-1" style={{ backgroundColor: 'orange', color: 'white' }}>
                <div>
                  <FaRegCalendarCheck />
                </div>
                <span>ADD APPOINTMENT</span>
              </button>
            </Link>
          </div>
        </div>
        <Profile />
        <Calendar />
      </div>
      <Reminder />
    </div>
  );
};

export default Home;
