import React from "react";
import "../newTask/NewTask.scss";


const NewTask = () => {
  return (
    <section className="newTask">
      <div className="container">
        <div className="headText">
          <h2>Add New Task</h2>
          <hr />
        </div>
        <div className="form">
          <form>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" />
            </div>

            <div>
              <label htmlFor="type">Task Type</label>
              <select name="type" id="type">
                <option value="personal">Personal</option>
                <option value="call">Phone call</option>
                <option value="email">Email</option>
                <option value="meeting">Meeting</option>
              </select>
            </div>

            <div>
              <label htmlFor="note">Note</label>
              <input type="text" name="note" id="note" />
            </div>

            <div>
              <label htmlFor="date">Due Date/Time</label>
              <input type="datetime-local" name="date" id="date" />
            </div>

            <div>
              <label htmlFor="status">Status</label>
              <select name="status" id="status">
                <option value="open">Open</option>
                <option value="progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

          </form>
          <button>Add Task</button>
        </div>
      </div>
    </section>
  );
};

export default NewTask;
