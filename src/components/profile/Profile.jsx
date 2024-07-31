import React from "react";

import { FaRegHandPointRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="w-896 p-1 border flex items-center gap-x-1">
      <div className="mr-2">
        <FaRegHandPointRight />
      </div>
      <span className="mr-2">Israfil Isgandarov</span>
      <div className="cursor-pointer">
        <FaAngleDown />
      </div>
    </div>
  );
};

export default Profile;
