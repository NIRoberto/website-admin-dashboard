import React, { useEffect } from "react";
import profileBg from "assets/img/profileBg.jpg";
import profile from "assets/img/profile.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDateRange, MdEmail, MdPermContactCalendar } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useHistory } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Profile = ({ dark, setOpen }) => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.token) {
      history.push("/login");
    }
  }, []);

  const user = JSON.parse(localStorage.getItem("userInfo"));
  const {
    firstName,
    lastName,
    phone,
    profileImage,
    bio,
    location,
    birthDate,
    role,
    email,
  } = user.data.LoggedInAs.user;

  return (
    <div
      className={`${
        dark ? "bg-dark text-white" : "bg-surface text-gray-800"
      } col-end-13 bg-surface col-start-1 lg:col-start-3    row-start-2  row-end-4 p-3`}
      onClick={() => setOpen(false)}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Users Profile</h2>
          <span className="text-xs">Business admin panel</span>
        </div>
        <div className="flex mt-6">
          <span>
            <AiFillHome className="text-main mr-1 mt-1 " />
          </span>
          /<span className="mx-1">user</span>/
          <span className="mx-1">All users</span>
        </div>
      </div>
      <div
        className={`${
          dark ? "bg-profileDark " : " bg-white"
        }  shadow-md  rounded-md `}
      >
        <ToastContainer autoClose={2000} />
        <div className="">
          <div className="relative">
            <img src={profileBg} alt="Profile background" className="w-full" />
            <div className="absolute -bottom-8 inset-x-1/3 sm:inset-x-1/3 md:inset-x-2/4">
              <img
                src={profileImage}
                alt="profile"
                className=" h-24 w-24 md:h-28 md:w-28  ml-4  object-cover rounded-full  border-surface border-8
                "
              />
            </div>
          </div>
          <div className=" border-b grid  m-2 md:m-4 p-4 md:p-8 grid-cols-1 md:grid-cols-3 border-gray-200">
            <div className="  flex flex-col-reverse items-center justify-center md:grid col-span-2  md:grid-cols-3 ">
              <div className="flex-col flex items-center justify-center md:justify-start  md:items-start my-2 ml-3">
                <div className="flex">
                  <span>
                    <MdEmail />
                  </span>
                  <span className="text-xs">Email</span>
                </div>
                <span className="text-gray-500 text-sm md:w-5/12 ">
                  {email}
                </span>
              </div>
              <div className="flex-col flex mt-2 items-center justify-center md:justify-start  md:items-start md:my-2  ">
                <div className="flex">
                  <span>
                    <MdDateRange />
                  </span>
                  <span className="text-xs">BRD</span>
                </div>
                <span className="text-gray-500 w-full md:w-5/6 ">
                  {birthDate}
                </span>
              </div>
              <div className="flex-col flex justify-center items-center mt-3 md:justify-start md:items-start  md:relative  ">
                <div className="flex ">
                  <span className="md:text-2xl md:absolute   -left-6 bottom-2 pr-4 ">
                    {`${lastName} ${firstName} `}{" "}
                  </span>
                </div>
                <span className="text-gray-500 md:left-3  md:absolute mr-4 md:mr-0 md:ml-5">
                  {role}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col-reverse md:grid  md:grid-cols-2 col-span-1">
              <div className="flex-col flex items-center justify-center md:justify-start  md:items-start my-2">
                <div className="flex">
                  <span>
                    <MdPermContactCalendar />
                  </span>
                  <span className="text-xs">Contact</span>
                </div>
                <span className="text-gray-500 w-full md:w-5/6 ">{phone}</span>
              </div>{" "}
              <div className="flex-col flex items-center justify-center md:justify-start  md:items-start my-2">
                <div className="flex">
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span className="text-xs">Location</span>
                </div>
                <span className=" text-gray-500  w-full md:w-5/6  ">
                  {location}
                </span>
              </div>
            </div>
          </div>
          <div className="py-8">
            <ul className="flex justify-center ">
              <li>
                <a href="#fb">
                  <GrFacebookOption className="hover:text-main text-xl" />
                </a>
              </li>
              <li className="ml-8">
                <a href="#fb">
                  <FiTwitter className="hover:text-main text-xl" />
                </a>
              </li>{" "}
              <li className="ml-8">
                <a href="#fb">
                  <FiInstagram className="hover:text-main text-xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center pb-4">
            <Link to="/user/profile/update">
              <button className="bg-main hover:bg-hover rounded-md text-white py-1.5 mb-4 px-8">
                {" "}
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          dark ? " bg-profileDark" : "bg-white"
        } rounded-md shadow-md mt-4 `}
      >
        <div className="m-4 py-4 border-b  flex items-center border-gray-200 ">
          <img
            src={profile}
            alt="profile"
            className="h-20   object-cover rounded-full w-20 border-surface border-8"
          />
          <span className="ml-2 text-sm">{`${firstName} ${lastName}`}</span>
        </div>
        <div className="m-4 py-4">
          <h1 className="text-main py-4 ">Bio</h1>
          <p className="text-sm leading-6">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
