import React from "react";

export default function Index() {
  return (
    <div className="w-full rounded-3xl bg-mainGrey">
      <div className="flex">
        <h3>Product Sell</h3>
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <form>
          <select name="average" id="average">
            <option value="30day">30 days</option>
          </select>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex">
              <div>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="#"
                />
              </div>
              <div>
                <h3>Abstract 3D</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </td>
            <td>32 in stock</td>
            <td>14.90 $</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
