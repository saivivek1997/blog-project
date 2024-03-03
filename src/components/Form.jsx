import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "./ui/Button";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useFormData } from "../context/formDataProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Form() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { setFormData } = useFormData();
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  function handleEyeIcon() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    const { password, email } = errors;
    if (!password && !email) {
      setFormData({ ...details });
      localStorage.setItem("userDetails", JSON.stringify(details));
      toast.success("Successfully stored in context api");
      navigate("/home");
    } else {
      toast.error("Please Fill all the fields");
    }
  }

  function handleBlurEmail() {
    const { email } = details;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: false }));
    }
  }

  function handleBlurPassword() {
    const { password } = details;
    if (password.length <= 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: false }));
    }
  }

  return (
    <div className={styles["login-form-container"]}>
      <h1 className={styles["form-title"]}>Login</h1>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-control-email"]}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={details.email}
            onChange={handleChange}
            name="email"
            onBlur={handleBlurEmail}
            required
          />
        </div>
        <p className={styles.error}>
          {errors.email ? "*****please provide correct email*****" : null}
        </p>
        <div className={styles["form-control-password"]}>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={details.password}
            onChange={handleChange}
            onBlur={handleBlurPassword}
            required
          />
          <div className={styles["eye-icon"]} onClick={handleEyeIcon}>
            {" "}
            {showPassword ? <IoEye /> : <IoEyeOff />}
          </div>
          <p className={styles.bold}>***password should be greater than 8***</p>
          <p className={styles.error}>
            {errors.password
              ? "*****please provide correct password*****"
              : null}
          </p>
        </div>
        <Button role="button" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Form;
