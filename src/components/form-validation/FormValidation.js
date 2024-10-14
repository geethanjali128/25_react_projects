import React, { useState } from "react";
import "./form.css";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(formData);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateInput = (getName, getValue) => {
    if (getName === "username") {
      setErrors({
        ...errors,
        username:
          getValue.length < 3 ? "Username must be atleast 3 characters" : "",
      });
    } else if (getName === "email") {
      setErrors({
        ...errors,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
          ? ""
          : "Invalid Email",
      });
    } else if (getName === "password") {
      setErrors({
        ...errors,
        password:
          getValue.length < 5 ? "Password must be atleast 5 charcters" : "",
      });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateInput(name, value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const validateErrors = {};
    // Object.keys(formData).forEach((dataItem) => {
    //   validateInput(dataItem, formData[dataItem]);
    //   if (errors[dataItem]) {
    //     validateErrors[dataItem] = errors[dataItem];
    //   }
    // });
    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   ...validateErrors,
    // }));
    // if (Object.values(validateErrors).every((error) => error === "")) {
    //   // perform your form submission logic
    // } else {
    //   console.log("error is present please fix it");
    // }
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>Simple Form Validation</h1>
        <form onSubmit={handleFormSubmit} autoComplete="off">
          <div className="input-wrapper">
            <label htmlFor="username">Userame:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleFormChange}
              placeholder="Enter your username"
            />
            <span>{errors?.username}</span>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email:</label>
            <input
              className="email-input"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
            />
            <span>{errors?.email}</span>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleFormChange}
              placeholder="Enter your password"
            />
            <span>{errors?.password}</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default FormValidation;
