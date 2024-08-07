import React from "react";

export default function Index() {
  return (
    <div className="about-profile w-2/4">
      <h5 className="box-title">My profile</h5>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Surname:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Phone:</th>
            <th>Email:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+9876543210</td>
            <td>jane.doe@gmail.com</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Job position:</th>
            <th>Gender:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Owner</td>
            <td>Female</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
