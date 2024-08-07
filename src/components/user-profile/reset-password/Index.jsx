import React from "react";

export default function Index() {
  return (
    <div className="reset-password w-2/4">
      <h5 className="box-title">Security</h5>
      <form>
        <div className="flex">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="current-password">Current password:</label>
            <input
              type="password"
              id="current-password"
              className="current-password"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label htmlFor="new-password">New password:</label>
            <input type="password" id="new-password" className="new-password" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="retry-password">Retry password:</label>
            <input
              type="password"
              id="retry-password"
              className="retry-password"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
