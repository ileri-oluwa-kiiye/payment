import React, { useState } from "react";
import { useFormik } from "formik";
import { LoginDiv } from "../components/styles";
import * as Yup from "yup";
import showIcon from "../assets/showIcon.png";
import hideIcon from "../assets/hideIcon.png";
import image from "../assets/bg_main.jpeg";
import { Link } from "react-router-dom";
import TopNav from "../components/topNav";
const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const userDetails = {
        email: values.email,
        password: values.password,
      };

      console.log(userDetails);
      // setShowPaymentButton(true);
    },
  });

  return (
    <LoginDiv>
      <img src={image} alt="" className="mainImage" />
      <main>
        <h2>Login to View Your Dashboard</h2>
        <form action="">
          <div className="inputFields">
            <div
              className={
                formik.errors.email && formik.touched.email ? "error" : ""
              }
            >
              <label htmlFor="email">Email Address</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
                placeholder="olusegunobasanjo@gmail.com"
                className={
                  formik.errors.email && formik.touched.email
                    ? "input-error"
                    : ""
                }
              />
              {formik.errors.email && formik.touched.email && (
                <p className="error">{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div className="inputField">
            <div
              className={
                formik.errors.password && formik.touched.password
                  ? "error outerDiv"
                  : "outerDiv"
              }
            >
              <div>
                <label htmlFor="password">Create Password </label>
                <div className="input">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type={show ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <button
                onClick={handleClick}
                aria-label="Toggle password visibility"
                type="button"
              >
                <img src={show ? hideIcon : showIcon} alt="Toggle visibility" />
              </button>
            </div>
            {formik.errors.password && formik.touched.password && (
              <p className="error">{formik.errors.password}</p>
            )}

            <Link to="/dashboard">
              <button
                type="submit"
                className={
                  formik.errors.password || formik.errors.email
                    ? "next-disabled"
                    : "next"
                }
                disabled={!!formik.errors.email || !!formik.errors.password}
              >
                Login to dashboard
              </button>
            </Link>

            {/* {error && <p className="error">{error}</p>} */}
          </div>
        </form>
      </main>
    </LoginDiv>
  );
};

export default Login;
