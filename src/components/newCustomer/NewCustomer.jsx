import React from "react";
import "../newCustomer/NewCustomer.scss";

const NewCustomer = () => {
  return (
    <section className="newCustomer">
      <div className="container">
        <div className="headText">
          <h2>Add New Customer</h2>
          <hr />
        </div>
        <div className="form">
          <form>
            <div>
              <label htmlFor="website">Website</label>
              <input type="email" name="website" id="website" />
            </div>
            <div>
              <label htmlFor="number">Fax Number</label>
              <input type="number" name="number" id="number" />
            </div>
            <div>
              <label htmlFor="address">Address 1</label>
              <input type="text" name="address" id="address" />
            </div>
            <div>
              <label htmlFor="address2">Address 2</label>
              <input type="text" name="address2" id="address2" />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value="us">United States(US)</option>
              </select>
            </div>

            <div>
              <label htmlFor="state">Province / State</label>
              <select name="state" id="state">
                <option value="state">~Select~</option>
              </select>
            </div>

            <div>
              <label htmlFor="code">Post Code / Zip Code</label>
              <input type="number" name="code" id="code" />
            </div>
          </form>
          <button>Add New</button>
        </div>
      </div>
    </section>
  );
};

export default NewCustomer;
