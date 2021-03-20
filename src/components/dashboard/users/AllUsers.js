import React from "react";
import { AiFillHome } from "react-icons/ai";
// import { usersDATA } from "../../data/users";
import UserCard from "./UserCard";

const AllUsers = ({ dark, setOpen, users }) => {
  const usersDATA = users.userData;
  console.log(usersDATA);
  return (
    <div
      className={`${
        dark ? "bg-dark text-white" : "bg-surface text-gray-800"
      } col-end-13 bg-surface col-start-1 lg:col-start-3   row-start-2  row-end-4 p-3`}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {usersDATA.map((user) => {
          return <UserCard {...user} dark={dark} key={user.id} />;
        })}
      </div>

      <div className="flex items-center text-sm my-5 justify-center">
        <div className="rounded-md bg-white mr-2 py-1.5 px-3 shadow-md hover:bg-hover transition duration-200 ease-in-out hover:text-white text-black">
          <a href="#1">Next</a>
        </div>
        <div className="bg-main rounded-md mr-2 py-1.5 px-3 shadow-md text-white hover:bg-hover transition duration-200 ease-in-out  ">
          <a href="#1">1</a>
        </div>{" "}
        <div className="bg-white rounded-md mr-2 py-1.5 px-3 shadow-md hover:bg-hover transition duration-200 ease-in-out hover:text-white text-black">
          <a href="#1">2</a>
        </div>{" "}
        <div className="bg-white rounded-md mr-2 py-1.5 px-3 shadow-md hover:bg-hover transition duration-200 ease-in-out hover:text-white text-black">
          <a href="#1">3</a>
        </div>
        <div className="bg-white rounded-md mr-2 py-1.5 px-3 shadow-md hover:bg-hover transition duration-200 ease-in-out hover:text-white text-black">
          <a href="#1">Prev</a>
        </div>
      </div>
      {/* <div>Lorem</div> */}
    </div>
  );
};

export default AllUsers;
