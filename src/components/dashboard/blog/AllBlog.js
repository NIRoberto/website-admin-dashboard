import { blog } from "components/data/blog";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import BlogCard from "./BlogCard";

const AllBlog = ({ dark, setOpen }) => {
  return (
    <div
      className={`${
        dark ? "bg-dark text-white" : "bg-surface text-gray-800"
      } col-end-13 bg-surface col-start-1 lg:col-start-3    row-start-2  row-end-4 p-3`}
      onClick={() => setOpen(false)}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Blog</h2>
          <span className="text-xs">Business admin panel</span>
        </div>
        <div className="flex mt-6">
          <span>
            <AiFillHome className="text-main mr-1 mt-1 " />
          </span>
          /<span className="mx-1">Blogs</span>/
          <span className="mx-1">All Blogs</span>
        </div>
      </div>

      <div>
        <ul className="flex items-center justify-center">
          <li>
            <button
              className="py-1 px-6 text-white rounded-md bg-main hover:bg-hover
            "
            >
              All blog
            </button>
          </li>
          <li>
            <button
              className="py-1.5 px-6 text-black ml-2 shadow-md text-sm rounded-md bg-white hover:bg-hover hover:text-white
            "
            >
              Mobile
            </button>
          </li>
          <li>
            <button
              className="py-1.5 px-6 text-black ml-2 shadow-md text-sm rounded-md bg-white hover:bg-hover hover:text-white
            "
            >
              Web dev
            </button>
          </li>
          <li>
            <button
              className="py-1.5 px-6 text-black ml-2 shadow-md text-sm rounded-md bg-white hover:bg-hover hover:text-white
            "
            >
              Designing
            </button>
          </li>
        </ul>
      </div>
      <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4">
        {blog.map((el) => {
          return <BlogCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default AllBlog;
