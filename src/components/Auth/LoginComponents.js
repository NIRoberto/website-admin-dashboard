import React from "react";
import logo from "assets/img/Eo_circle_light-blue_white_letter-r.svg";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "./input.css";

const LoginComponents = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white w-7/12 mt-16 shadow-md rounded-md  flex  flex-col items-center justify-center">
        <Link to="/" className="w-full ">
          <img
            src={logo}
            alt="my logo"
            className="h-16  my-2 py-2 border-b border-gray-200 w-full"
          />
        </Link>

        <form className="flex-col items-center justify-center  w-full flex">
          <div className="formControl flex-col flex w-6/12  items-center">
            <div className="w-full">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                className="p-2 focus:outline-none   w-full my-2 border-main rounded-md border"
                name="Email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="formControl flex-col flex w-6/12    items-center">
            <div className="w-full">
              <label htmlFor="Password">Password</label>
              <input
                type="text"
                className="p-2 focus:outline-none  w-full border-main border rounded-md my-2"
                name="Password"
                placeholder="password"
              />
            </div>
          </div>
          <div className="flex justify-between mt-4 w-6/12">
            <div>
              Signup{" "}
              <Link to="/register" className="text-main">
                {" "}
                here
              </Link>
            </div>
            <div className="bg-main text-white py-2 hover:bg-hover transition duration-500 ease-in-out px-8 rounded-md">
              <button className="focus:outline-none border-none outline-none">
                Signin
              </button>
            </div>
          </div>
        </form>
        <div className="bg-blue-900 mt-6  cursor-pointer hover:bg-blue-800 transition duration-500 ease-in-out  w-6/12 rounded-md flex text-white">
          <div className="flex items-center w-full h-full  justify-between">
            <div className="bg-blue-800 rounded-md p-2 ">
              <FaFacebookSquare className="h-6" />
            </div>
            <div className="text-center  w-full">Signin with facebook</div>
          </div>
        </div>
        <div className="bg-main mt-6  mb-6  hover:bg-hover transition duration-500 ease-in-out cursor-pointer w-6/12 rounded-md flex text-white">
          <div className="flex items-center w-full h-full  justify-between">
            <div className="bg-hover py-2 px-2  rounded-md h-full">
              <FaTwitterSquare className="h-6" />
            </div>
            <div className="text-center  w-full">Signin with twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
