import React from "react";

export default function Index() {
  return (
    <div className="about-profile w-2/4 p-10 border-r-2">
      <h5 className="box-title mb-10 font-bold text-xl">My profile</h5>
      <table className="inline-block w-full">
        <thead className="inline-block w-full">
          <tr className="inline-block w-full">
            <th className="text-slate-500 p-1 text-left inline-block w-2/4">Name:</th>
            <th className="text-slate-500 p-1 text-left inline-block w-2/4">Surname:</th>
          </tr>
        </thead>
        <tbody className="inline-block w-full mb-5">
          <tr className="inline-block w-full">
            <td className="font-bold p-1 text-left inline-block w-2/4">Jane</td>
            <td className="font-bold p-1 text-left inline-block w-2/4">Doe</td>
          </tr>
        </tbody>
        <thead className="inline-block w-full">
          <tr className="inline-block w-full">
            <th className="text-slate-500 p-1 text-left inline-block w-2/4">Phone:</th>
            <th className="text-slate-500 p-1 text-left inline-block w-2/4">Email:</th>
          </tr>
        </thead>
        <tbody className="inline-block w-full mb-5">
          <tr className="inline-block w-full">
            <td className="font-bold p-1 text-left inline-block w-2/4">+9876543210</td>
            <td className="font-bold p-1 text-left inline-block w-2/4">jane.doe@gmail.com</td>
          </tr>
        </tbody>
        <thead className="inline-block w-full">
          <tr className="inline-block w-full">
            <th className="text-slate-500 p-1 text-left inline-block w-2/4">Job position:</th>
            <th className="text-slate-500 p-1 text-left inline-block w-2/4">Gender:</th>
          </tr>
        </thead>
        <tbody className="inline-block w-full mb-5">
          <tr className="inline-block w-full">
            <td className="font-bold p-1 text-left inline-block w-2/4">Owner</td>
            <td className="font-bold p-1 text-left inline-block w-2/4">Female</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
