import React, { useState } from "react";
import { FaBars, FaRegEnvelope, FaRegUser, FaSearch } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoMoonOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsBell } from "react-icons/bs";
import profile from "assets/img/pexels-photo-220453.jpeg";
import prof from "assets/img/profileImage.jfif";
import blank from "assets/img/profile.png";
import { FiSun } from "react-icons/fi";
const Navbar = ({ dark, Open, setDark, setOpen }) => {
  const [notice, setNotice] = useState(false);
  const [Log, setLog] = useState(false);
  const [message, setMessage] = useState(false);
  return (
    <div
      className={`${
        dark ? "bg-NavDark text-white" : "bg-white"
      } col-start-1  lg:col-start-3 col-end-13  row-start-1 row-end-2   shadow-2xl`}
    >
      <div className="flex justify-between items-center  ">
        <div
          className="flex items-center pt-1
         justify-center"
        >
          <div
            className="ml-4 text-xl mt-1.5 cursor-pointer"
            onClick={() => setOpen(!Open)}
          >
            <FaBars />
          </div>
          <div className="flex items-center justify-center ">
            <form className="flex items-center my-3.5">
              <label htmlFor="search" className="  ml-3 mt-2.5  cursor-pointer">
                <FaSearch className="text-sm" />
              </label>
              {/* <input
                type="text"
                placeholder="search "
                className="focus:border-none outline-none  bg-none px-1 ml-2 mt-2"
              /> */}
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center pt-3 mr-4">
          <div>
            {dark ? (
              <span onClick={() => setDark(!dark)}>
                <FiSun className="text-xl mr-4 cursor-pointer" />
              </span>
            ) : (
              <span onClick={() => setDark(!dark)}>
                <IoMoonOutline className="text-xl mr-4 cursor-pointer" />
              </span>
            )}
          </div>
          <div className="relative">
            <BsBell
              className="text-xl z-10 mr-4 cursor-pointer "
              onClick={() => setNotice(!notice)}
            />
            <span className="bg-main animate-pulse transition duration-1000 ease-in-out absolute z-0 text-xs text-white  right-2 px-1 rounded-full -top-2">
              {" "}
              2
            </span>

            <div className={`${notice ? "block" : "hidden"}`}>
              <div
                className={`${
                  dark
                    ? "bg-profileDark text-white "
                    : " bg-white text-gray-800"
                } absolute top-10  right-3 shadow-md  rounded-md  z-20 w-64 md:w-80`}
              >
                <div className="header flex text-sm justify-between border-b border-gray-200 p-2 ">
                  <span className=" font-bold">Notification</span>
                  <a href="/#all" className="text-main">
                    Mark all as read
                  </a>
                </div>
                <div className="max-h-64 overflow-auto">
                  <div
                    className={`${
                      dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
                    } flex items-center justify-around p-2 border-b  cursor-pointer  border-gray-200 `}
                  >
                    <div className="icon bg-yellow-400 cursor-pointer rounded-md  p-1 md:p-3">
                      <FcMoneyTransfer className="text-2xl" />
                    </div>

                    <div className="text">
                      <h3 className=" text-sm">
                        {" "}
                        Hey Rob how was the weekend{" "}
                      </h3>

                      <span className="flex text-xs pt-1 ">
                        {" "}
                        <MdDateRange className="text-sm mr-1 " /> Feb 2 2020
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${
                      dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
                    } flex items-center justify-around p-2 border-b  cursor-pointer  border-gray-200 `}
                  >
                    <div className="icon bg-yellow-400 cursor-pointer rounded-md  p-1 md:p-3">
                      <FcMoneyTransfer className="text-2xl" />
                    </div>

                    <div className="text">
                      <h3 className=" text-sm">
                        {" "}
                        Hey Rob how was the weekend{" "}
                      </h3>

                      <span className="flex text-xs pt-1 ">
                        {" "}
                        <MdDateRange className="text-sm mr-1 " /> Feb 2 2020
                      </span>
                    </div>
                  </div>
                </div>

                <div className="footer flex items-center justify-center p-2">
                  <a
                    href="#href"
                    className="capitalize text-main items-center flex text-sm"
                  >
                    View all message
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <FaRegEnvelope
              className="text-xl cursor-pointer mr-4"
              onClick={() => {
                setMessage(!message);
              }}
            />
            <span className="bg-main animate-ping transition duration-1000 ease-in-out absolute z-0 text-xs text-white  right-2 px-1 rounded-full -top-2">
              {" "}
              4
            </span>
            <div className={`${message ? "block" : "hidden"}`}>
              <div
                className={`${
                  dark ? "bg-profileDark text-white" : " bg-white text-gray-800"
                } absolute top-8 right-3 shadow-md  rounded-md  z-20 w-60 md:w-80`}
              >
                <div className="header flex text-sm justify-between border-b border-gray-200 p-2 ">
                  <span className=" font-bold">Message</span>
                  <a href="/#all" className="text-main">
                    Mark all as read
                  </a>
                </div>
                <div className="max-h-64  overflow-auto">
                  <div
                    className={`${
                      dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
                    } flex items-center justify-around p-2 border-b  cursor-pointer border-gray-200 `}
                  >
                    <div
                      className="icon w-16 
                      h-16 cursor-pointer  p-3"
                    >
                      <img
                        src={prof}
                        alt="profile"
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div className="text">
                      <h3 className=" text-sm">
                        {" "}
                        Hey Rob how was the weekend{" "}
                      </h3>

                      <span className="flex text-xs pt-1 ">
                        {" "}
                        <MdDateRange className="text-sm mr-1 " /> Feb 2 2020
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${
                      dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
                    } flex items-center justify-around p-2 border-b  cursor-pointer border-gray-200 `}
                  >
                    <div
                      className="icon w-16 
                      h-16 cursor-pointer  p-3"
                    >
                      <img
                        src={prof}
                        alt="profile"
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div className="text">
                      <h3 className=" text-sm">
                        {" "}
                        Hey Rob how was the weekend{" "}
                      </h3>

                      <span className="flex text-xs pt-1 ">
                        {" "}
                        <MdDateRange className="text-sm mr-1 " /> Feb 2 2020
                      </span>
                    </div>
                  </div>{" "}
                  <div
                    className={`${
                      dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
                    } flex items-center justify-around p-2 border-b  cursor-pointer border-gray-200 `}
                  >
                    <div
                      className="icon w-16 
                      h-16 cursor-pointer  p-3"
                    >
                      <img
                        src={prof}
                        alt="profile"
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div className="text">
                      <h3 className=" text-sm">
                        {" "}
                        Hey Rob how was the weekend{" "}
                      </h3>

                      <span className="flex text-xs pt-1 ">
                        {" "}
                        <MdDateRange className="text-sm mr-1 " /> Feb 2 2020
                      </span>
                    </div>
                  </div>{" "}
                  <div
                    className={`${
                      dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
                    } flex items-center justify-around p-2 border-b  cursor-pointer border-gray-200 `}
                  >
                    <div
                      className="icon w-16 
                      h-16 cursor-pointer  p-3"
                    >
                      <img
                        src={prof}
                        alt="profile"
                        className="rounded-full object-cover"
                      />
                    </div>

                    <div className="text">
                      <h3 className=" text-sm">
                        {" "}
                        Hey Rob how was the weekend{" "}
                      </h3>

                      <span className="flex text-xs pt-1 ">
                        {" "}
                        <MdDateRange className="text-sm mr-1 " /> Feb 2 2020
                      </span>
                    </div>
                  </div>
                </div>

                <div className="footer flex items-center justify-center p-2">
                  <a
                    href="#heref"
                    className="capitalize text-main items-center flex text-sm"
                  >
                    View all message
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-9 h-9 rounded-full  object-cover cursor-pointer relative "
              src={profile || blank}
              alt="profile"
              onClick={() => setLog(!Log)}
            />

            <div className={`${Log ? "block" : "hidden "}`}>
              <div className="bg-white rounded-md text-gray-700 w-36 mt-2 shadow-md absolute  right-5">
                <div className="flex p-2 border-b items-center  justify-center border-gray-200">
                  <div className=" mr-1 text-sm">
                    <IoSettingsOutline />
                  </div>
                  <div className="text-xs">
                    <a href="/">Setting</a>
                  </div>
                </div>
                <a
                  href="/"
                  className="flex p-2 border-b items-center  justify-center border-gray-200"
                >
                  <div className=" mr-1 text-sm">
                    <FaRegUser />
                  </div>
                  <div className="text-xs">Profile</div>
                </a>{" "}
                <a
                  href="/"
                  className="flex p-2 border-b items-center  justify-center text-red-500 border-gray-200"
                >
                  <div className=" mr-1 text-sm">
                    <IoIosLogOut />
                  </div>
                  <div className="text-xs">Logout</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
