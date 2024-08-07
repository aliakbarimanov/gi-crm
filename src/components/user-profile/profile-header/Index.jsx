import React from "react";

import profilePicture from "../../../assets/user.jpg";

export default function Index() {
  return (
    <div className="profile-header py-6 border-b-2 flex items-center gap-x-5">
        <div className="profile-image w-20 h-20 rounded-full">
          <img
            src={profilePicture}
            alt="surname name"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="profile-details">
          <h5 className="profile-name text-2xl font-bold">Jane Doe</h5>
          <p className="profile-position font-medium text-slate-400">Owner</p>
        </div>
      </div>
  );
}
