/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import './input.css';
import logo from 'assets/img/Eo_circle_light-blue_white_letter-r.svg';
import axios from 'axios';
import { loginFailed, loginSuccess } from 'redux/action/userAction';
import { useDispatch } from 'react-redux';
import setAuthorizationToken from 'utils/setAuth';
import validationSchema from './validation/loginValidate';

const LoginComponents = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };

    axios
      .post('https://dashboard-r-api.herokuapp.com/api/v1/users/signin', user)
      .then((data) => {
        dispatch(loginSuccess(data));

        localStorage.setItem('token', data.data.token);
        setAuthorizationToken(data.data.token);
        localStorage.setItem('userInfo', JSON.stringify(data));
        toast.success('User login successfully');

        setTimeout(() => {
          history.push('/user/profile');
          setTimeout(() => {
            toast.success(`Welcome ${data.data.LoggedInAs.user.firstName}`);
          }, 8000);
        }, 3000);
      })
      .catch((error) => {
        dispatch({ type: 'SIGNUP_FAILED ', payload: error });
        toast.error(error.message);
        dispatch(loginFailed(error.message));
      });
  };
  return (
    <div className=" flex items-center justify-center">
      <ToastContainer autoClose={2000} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="bg-white w-11/12 md:w-7/12 mt-16 shadow-md rounded-md  flex  flex-col items-center justify-center">
          <Link to="/" className="w-full ">
            <img
              src={logo}
              alt="my logo"
              className="h-16  my-2 py-2 border-b border-gray-200 w-full"
            />
          </Link>

          <Form className="flex-col items-center justify-center  w-full flex">
            <div className="formControl flex-col flex w-4/5 md:w-6/12  items-center">
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

            <div className="formControl flex-col flex w-4/5 md:w-6/12    items-center">
              <div className="w-full">
                <label htmlFor="Password">Password</label>
                <Field
                  type="text"
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
            <div className="flex justify-between mt-4 w-4/5 md:w-6/12">
              <div>
                Signup
                {' '}
                <Link to="/register" className="text-main">
                  {' '}
                  here
                </Link>
              </div>
              <div className="bg-main text-white py-2 hover:bg-hover transition duration-500 ease-in-out px-8 rounded-md">
                <button
                  type="submit"
                  className="focus:outline-none border-none outline-none"
                >
                  Signin
                </button>
              </div>
            </div>
          </Form>
          <div className="bg-blue-900 mt-6  cursor-pointer hover:bg-blue-800 transition duration-500 ease-in-out  w-4/5 md:w-6/12 rounded-md flex text-white">
            <div className="flex items-center w-full h-full  justify-between">
              <div className="bg-blue-800 rounded-md p-2 ">
                <FaFacebookSquare className="h-6" />
              </div>
              <div className="text-center  w-full">Signin with facebook</div>
            </div>
          </div>
          <div className="bg-main mt-6  mb-6  hover:bg-hover transition duration-500 ease-in-out cursor-pointer w-4/5 md:w-6/12 rounded-md flex text-white">
            <div className="flex items-center w-full h-full  justify-between">
              <div className="bg-hover py-2 px-2  rounded-md h-full">
                <FaTwitterSquare className="h-6" />
              </div>
              <div className="text-center  w-full">Signin with twitter</div>
            </div>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default LoginComponents;
