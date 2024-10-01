import React, { useEffect, useState } from "react";
import "../newTask/NewTask.scss";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const NewTask = () => {
  const BASE_URL = "http://localhost:8085/edupo";

  // const { customers, setCustomers } = useState([]);

  // const callCustomers = async () => {
  //   const customers = await axios
  //     .get(`${BASE_URL}/api/v1/customers`)
  //     .then((res) => setCustomers(res.content))
  //     .catch((error) => console.log(error));
  // };

  // useEffect(callCustomers, []);

  const newTaskSchema = object({
    taskSubject: string()
      .required("Boş keçmək olmaz!")
      .trim("Boş keçmək olmaz!"),
    customerName: string()
      .required("Boş keçmək olmaz!")
      .trim("Boş keçmək olmaz!"),
    customerId: string()
      .default(1)
      .required("Boş keçmək olmaz!")
      .trim("Boş keçmək olmaz!"),
    dueDate: string().default("2024-10-01").required("Boş keçmək olmaz!").trim("Boş keçmək olmaz!"),
    userId: string()
      .default(1)
      .required("Boş keçmək olmaz!")
      .trim("Boş keçmək olmaz!"),
    note: string().required("Boş keçmək olmaz!").trim("Boş keçmək olmaz!"),
    status: string().required("Boş keçmək olmaz!").trim("Boş keçmək olmaz!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newTaskSchema) });

  const onSubmit = async (data) => {
    await axios
      .post(`${BASE_URL}/api/v1/task`, data)
      .then(() => {
        toast("Tapşırıq uğurla yaradıldı!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="newTask">
      <div className="container">
        <div className="headText">
          <h2>Add New Task</h2>
          <hr />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="customer">Customer:</label>
              <select
                name="customerName"
                id="customer"
                {...register("customerName")}
              >
                <option value="">----</option>
                {/* {customers?.map((customer) => (
                  <option value={customer.name}>{customer.name}</option>
                ))} */}
                <option value="example 1">Example 1</option>
                <option value="example 2">Example 2</option>
                <option value="example 3">Example 3</option>
              </select>
              {errors.customerName && (
                <span>{errors.customerName.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="taskSubject"
                id="subject"
                {...register("taskSubject")}
              />
              {errors.taskSubject && <span>{errors.taskSubject.message}</span>}
            </div>

            <div>
              <label htmlFor="status">Status:</label>
              <select name="status" id="status" {...register("status")}>
                <option value="">----</option>
                <option value="open">Open</option>
                <option value="progress">In Progress</option>
                <option value="done">Done</option>
              </select>
              {errors.status && <span>{errors.status.message}</span>}
            </div>

            <div>
              <label htmlFor="date">Due Date/Time:</label>
              <input
                type="datetime-local"
                name="dueDate"
                id="date"
                {...register("dueDate")}
              />
              {errors.dueDate && <span>{errors.dueDate.message}</span>}
            </div>

            <div>
              <label htmlFor="note">Note:</label>
              <textarea name="note" id="note" {...register("note")}></textarea>
              {errors.note && <span>{errors.note.message}</span>}
            </div>
            <button>Add Task</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default NewTask;
