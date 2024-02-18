import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [submit, setSubmit] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmit(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {submit ? <h1>Registration Successful!!!</h1> : <h1>Register Now!!</h1>}
        <div className="Input-section">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="input"
            {...register("name", {
              required: "Enter your Name",
              minLength: { value: 3, message: "Name must be at least 3 characters" },
              maxLength: { value: 30, message: "Name cannot exceed 30 characters" }
            })}
          />
          <span>{errors.name && errors.name.message}</span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("email", {
              required: "Enter your Email",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            })}
          />
          <span>{errors.email && errors.email.message}</span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("password", {
              required: "Enter Password",
              pattern: {
                value: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/,
                message: "Password should  contain at least one special character",
              },
              minLength: { value: 10, message: "Password should be at least 10 characters" }
            })}
          />
          <span>{errors.password && errors.password.message}</span>
          <label htmlFor="rePassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter Password"
            className="input"
            {...register("rePassword", {
              required: "Re-Enter your Password",
              validate: value => value === watch("password") || "Passwords do not match"
            })}
          />
          <span>{errors.rePassword && errors.rePassword.message}</span>
          <button type="submit" className="btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Form;