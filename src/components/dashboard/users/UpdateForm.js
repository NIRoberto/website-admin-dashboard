import React from "react";
import { AiFillHome } from "react-icons/ai";

const UpdateForm = ({ dark, setOpen }) => {
  return (
    <div
      className={`${
        dark ? "bg-dark text-white" : "bg-surface text-gray-800"
      } col-end-13 bg-surface col-start-1 lg:col-start-3  row-start-2  row-end-4 p-3`}
      onClick={() => setOpen(false)}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl"> Profile</h2>
          <span className="text-xs">Business admin panel</span>
        </div>
        <div className="flex mt-6">
          <span>
            <AiFillHome className="text-main mr-1 mt-1 " />
          </span>
          /<span className="mx-1">User</span>/
          <span className="mx-1">Update profile</span>
        </div>
      </div>

      <div
        className={`${
          dark ? "bg-hoverDark " : "bg-white"
        } rounded-md shadow-md w-full my-4`}
      >
        <div className="text-main px-4 py-4 text-xl font-bold ">
          <h2 className="mx-5"> Update profile</h2>
        </div>

        <form className="w-full border-t border-gray-200 pb-4">
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-4  flex w-10/12">
              <label htmlFor="FirstName" className="my-2 text-main">
                First name
              </label>
              <input
                type="text"
                name="FirstName"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
            <div className="flex-col my-4 w-10/12    flex">
              <label htmlFor="LastName" className="my-2 text-main">
                {" "}
                Last name
              </label>
              <input
                type="text"
                name="LastName"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-2  flex w-10/12">
              <label htmlFor="Email" className="my-2 text-main">
                Email
              </label>
              <input
                type="text"
                name="Email"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
            <div className="flex-col my-2 w-10/12    flex">
              <label htmlFor="Phone" className="my-2 text-main">
                {" "}
                Phone
              </label>
              <input
                type="text"
                name="Phone"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-2  flex w-10/12">
              <label htmlFor="DateOfBirth" className="my-2 text-main">
                Date of birth
              </label>
              <input
                type="text"
                name="DateOfBirth"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
            <div className="flex-col my-2 w-10/12    flex">
              <label htmlFor="Location" className="my-2 text-main">
                {" "}
                Location
              </label>
              <input
                type="text"
                name="Location"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
          </div>{" "}
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-2  flex w-10/12">
              <label htmlFor="Facebook" className="my-2 text-main">
                Facebook link
              </label>
              <input
                type="text"
                name="Facebook"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
            <div className="flex-col my-2 w-10/12    flex">
              <label htmlFor="Twitter" className="my-2 text-main">
                {" "}
                Twitter link
              </label>
              <input
                type="text"
                name="Twitter"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
          </div>
          <div className="grid  mb-2  grid-cols-1 w-full justify-items-center">
            <div className="flex-col    flex w-10/12 md:w-11/12">
              <label htmlFor="Git" className="my-2 text-main">
                GitHub Link
              </label>
              <input
                type="text"
                name="Git"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-main focus:outline-none border-main`}
              />
            </div>
            <div className="flex-col w md:w-11/12    flex">
              <label htmlFor="Phone" className="my-2 text-main">
                {" "}
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                className={`${
                  dark ? "bg-hoverDark border-main border" : ""
                }border     focus:border-main focus:outline-none  border-main rounded-md p-2`}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between items-center  w-6/12 md:w-11/12 ml-10 my-10">
            <div>
              <input type="file" name="image" id="" />
            </div>
            <div>
              <button className="px-8 py-1 bg-main rounded-md text-white hover:bg-hover">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
