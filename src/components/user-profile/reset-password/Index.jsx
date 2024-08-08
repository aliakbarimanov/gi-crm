import React from "react";

export default function Index() {
  return (
    <div className="reset-password w-2/4 p-10">
      <h5 className="box-title mb-10 font-bold text-xl">Security</h5>
      <form>
        <div className="flex mb-10">
          <div className="flex flex-col mr-10">
            <label htmlFor="email" className="mb-1 font-bold text-slate-500">Email:</label>
            <input type="email" id="email" className="email p-1 border-2 rounded-md"  placeholder="jane.doe@gmail.com"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="current-password" className="mb-1 font-bold text-slate-500">Current password:</label>
            <input
              type="password"
              id="current-password"
              className="current-password p-1 border-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mr-10">
            <label htmlFor="new-password" className="mb-1 font-bold text-slate-500">New password:</label>
            <input type="password" id="new-password" className="new-password p-1 border-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="retry-password" className="mb-1 font-bold text-slate-500">Retry password:</label>
            <input
              type="password"
              id="retry-password"
              className="retry-password p-1 border-2 rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
