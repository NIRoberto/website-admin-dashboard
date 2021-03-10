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
          <h2 className="font-bold text-xl md:text-2xl"> Profile</h2>
          <span className="text-xs">Business admin panel</span>
        </div>
        <div className="flex mt-6">
          <span>
            <AiFillHome className="text-main mr-1 mt-1 " />
          </span>
          /<span className="mx-1">User</span>/
          <span className="mx-1  text-sm md:text-lg">Update profile</span>
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

        <form className="w-full  pb-4">
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-4  flex w-10/12">
              <label htmlFor="FirstName" className="my-2 text-gray-400">
                First name
              </label>
              <input
                type="text"
                name="FirstName"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray focus:outline-none border-gray-400`}
              />
            </div>
            <div className="flex-col my-4 w-10/12    flex">
              <label htmlFor="LastName" className="my-2 text-gray-400">
                {" "}
                Last name
              </label>
              <input
                type="text"
                name="LastName"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-2  flex w-10/12">
              <label htmlFor="Email" className="my-2 text-gray-400">
                Email
              </label>
              <input
                type="text"
                name="Email"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
            <div className="flex-col my-2 w-10/12    flex">
              <label htmlFor="Phone" className="my-2 text-gray-400">
                {" "}
                Phone
              </label>
              <input
                type="text"
                name="Phone"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-2  flex w-10/12">
              <label htmlFor="DateOfBirth" className="my-2 text-gray-400">
                Date of birth
              </label>
              <input
                type="text"
                name="DateOfBirth"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
            <div className="flex-col my-2 w-10/12    flex">
              <label htmlFor="Location" className="my-2 text-gray-400">
                {" "}
                Location
              </label>
              <input
                type="text"
                name="Location"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
          </div>{" "}
          <div className="grid  grid-cols-1 md:grid-cols-2 w-full justify-items-center">
            <div className="flex-col md:my-2  flex w-10/12">
              <label htmlFor="Facebook" className="my-2 text-gray-400">
                Facebook link
              </label>
              <input
                type="text"
                name="Facebook"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
            <div className="flex-col my-2 w-10/12    flex">
              <label htmlFor="Twitter" className="my-2 text-gray-400">
                {" "}
                Twitter link
              </label>
              <input
                type="text"
                name="Twitter"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
          </div>
          <div className="grid  mb-2  grid-cols-1 w-full justify-items-center">
            <div className="flex-col    flex w-10/12 md:w-11/12">
              <label htmlFor="Git" className="my-2 text-gray-400">
                GitHub Link
              </label>
              <input
                type="text"
                name="Git"
                className={`${
                  dark ? "bg-hoverDark" : ""
                } border px-2 py-1 rounded-md focus:border-gray-400 focus:outline-none border-gray-400`}
              />
            </div>
            <div className="flex-col  w-10/12 md:w-11/12    flex">
              <label htmlFor="Bio" className="my-2  text-gray-400">
                {" "}
                Bio
              </label>
              <textarea
                name="Bio"
                id="bio"
                className={`${
                  dark ? "bg-hoverDark  " : ""
                }border     focus:border-gray-400 focus:outline-none  border-gray-400 rounded-md p-2`}
              ></textarea>
            </div>
          </div>
          <div className="flex  flex-col   w-5/12 md:w-11/12 ml-7  md:ml-10 ">
            <label htmlFor="Phone" className="my-2 text-gray-400">
              {" "}
              Image
            </label>
            <input type="file" name="image" id="" />
          </div>
          <div className="flex items-center  w-5/12 md:w-11/12 ml-7 md:ml-10 my-10">
            <button className="px-8 py-1 bg-main rounded-md text-white hover:bg-hover">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
