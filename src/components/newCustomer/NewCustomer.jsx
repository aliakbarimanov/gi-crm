import React, { useEffect, useState } from "react";
import "../newCustomer/NewCustomer.scss";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const NewCustomer = () => {
  const BASE_URL = "http://localhost:8085/edupo";

  const stages = ["lead", "contacted", "qualified", "postponed", "won", "lost"];

  const { courses, setCourses } = useState([]);

  const callCourses = async () => {
    await axios
      .get(`${BASE_URL}/api/v1/courses`)
      .then((res) => setCourses(res))
      .catch((error) => console.log(error));
  };

  useEffect(callCourses, []);

  const newCustomerSchema = object({
    name: string()
      .required("Adı daxil etmədiniz!")
      .trim("Adı daxil etmədiniz!"),
    stage: string().required("Boş keçmək olmaz!").trim("Boş keçmək olmaz!"),
    mobileNumber: string()
      .required("Nömrəni daxil etmədiniz!")
      .trim("Nömrəni daxil etmədiniz!"),
    email: string()
      .required("Emaili ünvanı daxil etmədiniz!")
      .trim("Emaili ünvanı daxil etmədiniz!")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Düzgün email ünvanı daxil etməmisiniz!"
      ),
    gender: string().required("Boş keçmək olmaz!").trim("Boş keçmək olmaz!"),
    status: string().required("Boş keçmək olmaz!").trim("Boş keçmək olmaz!"),
    courseId: string()
      .required("Kurs adını daxil etmədiniz!")
      .trim("Kurs adını daxil etmədiniz!"),
    userId: string().default(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newCustomerSchema),
  });

  const onSubmit = async (data) => {
    await axios
      .post(`${BASE_URL}/api/v1/customers`, data)
      .then(() => {
        toast("Məhsul uğurla yaradıldı!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="newCustomer">
      <div className="container">
        <div className="headText">
          <h2>Add New Customer</h2>
          <hr />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" {...register("name")} />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="stage">Stage:</label>
              <select name="stage" id="stage" {...register("stage")}>
                <option value="">----</option>
                {stages.map((stage, index) => (
                  <option value={stage} key={index}>
                    {stage}
                  </option>
                ))}
              </select>
              {errors.stage && <span>{errors.stage.message}</span>}
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="mobileNumber"
                id="phone"
                {...register("mobileNumber")}
              />
              {errors.mobileNumber && (
                <span>{errors.mobileNumber.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select name="gender" id="gender" {...register("gender")}>
                <option value="">----</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              {errors.gender && <span>{errors.gender.message}</span>}
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <select name="status" id="status" {...register("status")}>
                <option value="">----</option>
                <option value="owner">Owner</option>
                <option value="ceo">CEO</option>
              </select>
              {errors.status && <span>{errors.status.message}</span>}
            </div>
            <div>
              <label htmlFor="course">Course:</label>
              <select name="courseId" id="course" {...register("courseId")}>
                {courses.map((course, index) => (
                  <option value={course.id} key={index}>{course.courseName}</option>
                ))}
              </select>
              {errors.courseId && <span>{errors.courseId.message}</span>}
            </div>
            <div>
              <button>Add New</button>
            </div>
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

export default NewCustomer;
