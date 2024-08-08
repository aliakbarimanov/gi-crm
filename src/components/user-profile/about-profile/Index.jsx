import React from "react";

export default function Index() {
  return (
    <div className="about-profile w-2/4 p-10 border-r-2">
      <h5 className="box-title mb-10 font-bold text-xl">My profile</h5>
      <table>
        <thead>
          <tr>
            <th className="text-slate-500 p-1 text-left">Name:</th>
            <th className="text-slate-500 p-1 text-left">Surname:</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td className="font-bold p-1 text-left">Jane</td>
            <td className="font-bold p-1 text-left">Doe</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="text-slate-500 p-1 text-left">Phone:</th>
            <th className="text-slate-500 p-1 text-left">Email:</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td className="font-bold p-1 text-left">+9876543210</td>
            <td className="font-bold p-1 text-left">jane.doe@gmail.com</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="text-slate-500 p-1 text-left">Job position:</th>
            <th className="text-slate-500 p-1 text-left">Gender:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold p-1 text-left">Owner</td>
            <td className="font-bold p-1 text-left">Female</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
