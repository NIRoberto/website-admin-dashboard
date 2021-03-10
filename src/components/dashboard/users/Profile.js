import React from "react";
import profileBg from "assets/img/profileBg.jpg";
import profile from "assets/img/profile.png";
import { MdDateRange, MdEmail, MdPermContactCalendar } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Profile = ({ dark, setOpen }) => {
  return (
    <div
      className={`${
        dark ? "bg-dark text-white" : "bg-surface text-gray-800"
      } col-end-13 bg-surface col-start-1 lg:col-start-3    row-start-2  row-end-4 p-3`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`${
          dark ? "bg-profileDark " : " bg-white"
        }  shadow-md  rounded-md `}
      >
        <div className="">
          <div className="relative">
            <img src={profileBg} alt="Profile background" className="w-full" />
            <div className="absolute -bottom-8 inset-x-1/3 md:inset-x-2/4">
              <img
                src={profile}
                alt="profile"
                className=" h-24 w-24 md:h-28 md:w-28  ml-4  object-cover rounded-full  border-surface border-8
                "
              />
            </div>
          </div>
          <div className=" border-b grid  m-2 md:m-4 p-4 md:p-8 grid-cols-1 md:grid-cols-3 border-gray-200">
            <div className="  flex flex-col-reverse items-center justify-center md:grid   md:grid-cols-3 col-span-2">
              <div className="flex-col flex my-2 ml-3">
                <div className="flex">
                  <span>
                    <MdEmail />
                  </span>
                  <span className="text-xs">Email</span>
                </div>
                <span className="text-gray-500 text-sm">dev@gmail.com</span>
              </div>
              <div className="flex-col flex my-2">
                <div className="flex">
                  <span>
                    <MdDateRange />
                  </span>
                  <span className="text-xs">BRD</span>
                </div>
                <span className="text-gray-500 w-full md:w-5/6 ">
                  2 june 2021
                </span>
              </div>
              <div className="flex-col flex ">
                <div className="flex ">
                  <span className="text-2xl ">Dev Angel</span>
                </div>
                <span className="text-gray-500 ml-5">Manager</span>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col-reverse md:grid  md:grid-cols-2 col-span-1">
              <div className="flex-col flex my-2">
                <div className="flex">
                  <span>
                    <MdPermContactCalendar />
                  </span>
                  <span className="text-xs">Contact</span>
                </div>
                <span className="text-gray-500 w-full md:w-5/6 ">
                  +23255-5435
                </span>
              </div>{" "}
              <div className="flex-col flex my-2">
                <div className="flex">
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span className="text-xs">Location</span>
                </div>
                <span className=" text-gray-500  w-full md:w-5/6  ">
                  Huye Rwanda
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
            <button className="bg-main hover:bg-hover rounded-md text-white py-1.5 mb-4 px-8">
              {" "}
              Update
            </button>
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
          <span className="ml-2 text-sm">Dev Angle</span>
        </div>
        <div className="m-4 py-4">
          <h1 className="text-main py-4 ">Bio</h1>
          <p className="text-sm leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            voluptates voluptatibus quasi placeat modi deserunt obcaecati
            excepturi tenetur itaque aperiam, dolorem expedita perferendis
            aspernatur reprehenderit, nihil quae porro maiores quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
