import React from 'react';
import './AppointmentForm.scss';

const AppointmentForm = () => {
  return (
      <div className="form-container">
        <form className="appointment-form">
          <label>
            Subject: <span className="required">*</span>
            <input type="text" name="subject" required />
          </label>
          <label>
            Product: <span className="required">*</span>
            <input type="text" name="product" required />
          </label>
          <label>
            Customer Name: <span className="required">*</span>
            <input type="text" name="customerName" required />
          </label>
          <label>
            Start Date: <span className="required">*</span>
            <input type="datetime-local" name="startDate" required />
          </label>
          <label>
            End Date: <span className="required">*</span>
            <input type="datetime-local" name="endDate" required />
          </label>
          <label>
            Meeting Note:
            <input type="text" name="meetingNote" />
          </label>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
  );
};

export default AppointmentForm;
