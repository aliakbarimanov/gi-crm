import React from "react";

import ProfileHeader from "../../components/user-profile/profile-header/Index";
import AboutProfile from "../../components/user-profile/about-profile/Index";
import ResetPassword from "../../components/user-profile/reset-password/Index";

export default function Index() {
  return (
    <section className="user-profile">
      <div className="container">
        <ProfileHeader />
        <div className="profile-actions mt-28 flex">
          <AboutProfile />
          <ResetPassword />
        </div>
      </div>
    </section>
  );
}
