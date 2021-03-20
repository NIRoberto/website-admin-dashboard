import React, { useEffect } from "react";
import logo from "assets/img/Eo_circle_light-blue_white_letter-r.svg";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import validationSchema from "./validation/registerValidation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { signFailed, signupSuccess } from "redux/action/userAction";
const RegisterComponents = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    axios
      .post(`https://dashboard-r-api.herokuapp.com/api/v1/users/signup`, user)
      .then((data) => {
        dispatch(signupSuccess(data));

        localStorage.setItem("token", data.data.token);
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("user signup successfully");

        setTimeout(() => {
          history.push("/user/profile");
          setTimeout(() => {
            toast.success(`Welcome ${data.data.data.newUser.firstName}`);
          }, 6000);
        }, 3000);
      })
      .catch((error) => {
        dispatch({ type: "SIGNUP_FAILED ", payload: error });
        toast.error("Email has been  taken by other person");
        console.log(error.message);
        dispatch(signFailed(error.message));
      });
  };

  useEffect(() => {
    if (localStorage.token) {
      history.push("/user/profile");
    }
  }, []);

  return (
    <div className=" flex items-center justify-center">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="bg-white w-11/12 md:w-7/12 mt-7 shadow-md rounded-md flex flex-col items-center justify-center">
          <Link to="/" className="w-full ">
            <img
              src={logo}
              alt="my logo"
              className="h-16  my-2 py-2 border-b border-gray-200 w-full"
            />
          </Link>

          <Form className="flex-col items-center justify-center  w-full flex">
            <div className="formControl  flex w-11/12 md:w-7/12  items-center">
              <div className="w-6/12">
                <label htmlFor="firstName">First name</label>
                <Field
                  type="text"
                  className="p-2 focus:outline-none   w-full my-2 border-gray-400 rounded-md border "
                  name="firstName"
                  placeholder="First name"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-500 text-sm "
                />
              </div>
              <div className="w-6/12 ml-6">
                <label htmlFor="lastName">Last name</label>
                <Field
                  type="text"
                  className="p-2 focus:outline-none   w-full my-2 border-gray-400 rounded-md border"
                  name="lastName"
                  placeholder="Last name"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-500 text-sm "
                />
              </div>
            </div>
            <div className="formControl flex-col flex w-11/12 md:w-7/12  items-center">
              <div className="w-full">
                <label htmlFor="email">Email</label>
                <Field
                  type="text"
                  className="p-2 focus:outline-none   w-full my-2 border-gray-400 rounded-md border"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm "
                />
              </div>
            </div>

            <div className="formControl flex-col flex w-11/12 md:w-7/12     items-center">
              <div className="w-full">
                <label htmlFor="Password">Password</label>
                <Field
                  type="password"
                  className="p-2 focus:outline-none  w-full border-gray-400 border rounded-md my-2"
                  name="password"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 text-sm "
                />
              </div>
            </div>
            <div className="flex justify-between mt-4 w-11/12 md:w-7/12">
              <div>
                Signin{" "}
                <Link to="/Login" className="text-main">
                  {" "}
                  here{" "}
                </Link>
              </div>
              <div className="bg-main hover:bg-hover transition duration-500 ease-in-out text-white py-2 px-8 rounded-md">
                <button
                  type="submit"
                  className=" focus:outline-none border-none"
                >
                  Signup
                </button>
              </div>
            </div>
          </Form>
          <div className="bg-blue-900 mt-6  cursor-pointer hover:bg-blue-800 transition duration-500 ease-in-out  w-11/12 md:w-7/12 rounded-md flex text-white">
            <div className="flex items-center w-full h-full  justify-between">
              <div className="bg-blue-800 rounded-md p-2 ">
                <FaFacebookSquare className="h-6" />
              </div>
              <div className="text-center  w-full">Signup with facebook</div>
            </div>
          </div>
          <div className="bg-main mt-6  mb-6  hover:bg-hover transition duration-500 ease-in-out cursor-pointer w-11/12 md:w-7/12 rounded-md flex text-white">
            <div className="flex items-center w-full h-full  justify-between">
              <div className="bg-hover py-2 px-2  rounded-md h-full">
                <FaTwitterSquare className="h-6" />
              </div>
              <div className="text-center  w-full">Signup with twitter</div>
            </div>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default RegisterComponents;
