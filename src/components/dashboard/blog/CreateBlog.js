/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = ({ dark, setOpen }) => (
  <div
    className={`${
      dark ? 'bg-dark text-white' : 'bg-surface text-gray-800'
    } col-end-13 bg-surface col-start-1 lg:col-start-3    row-start-2   row-end-4 p-3`}
    onClick={() => setOpen(false)}
  >
    <div className="flex justify-between mb-4">
      <div>
        <h2 className="font-bold text-2xl">Blog</h2>
        <span className="text-xs">Business admin panel</span>
      </div>
      <div className="flex mt-6">
        <span>
          <AiFillHome className="text-main mr-1 mt-1 " />
        </span>
        <span className="mx-1">Create post</span>
      </div>
    </div>
    <div
      className={`${
        dark ? ' bg-hoverDark ' : ' bg-white'
      } shadow-md  rounded-md`}
    >
      <h1 className="border-b p-4">Write your post here</h1>

      <form className="m-4">
        <div className="w-full ml-4 p-4 flex items-center justify-center">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            className="border-gray-400 rounded-md bg-none py-1 px-2 w-10/12 ml-2 focus:border-none focus:outline-none  border"
          />
        </div>
        <div className="w-full pt-4 md:p-4 flex items-center justify-center">
          <label htmlFor="title">Category</label>
          <select className="border-gray-400 rounded-md bg-none py-1 px-2 w-10/12 ml-2 focus:border-none focus:outline-none  border">
            <option value="web">Web</option>
            <option value="mobile">Mobile</option>
            <option value="designing">Designing</option>
          </select>
        </div>
        <div className="w-full pt-4 md:p-4 flex  items-center justify-center">
          <label htmlFor="title">Category</label>

          <textarea
            name="content"
            className="border-gray-400 rounded-md bg-none py-1 px-2 w-10/12 h-32 ml-2 focus:border-none focus:outline-none  border"
          />
        </div>
        <div className="w-full ml-1 pt-4 md:p-4 flex items-center justify-center">
          <label htmlFor="title">Image</label>
          <input
            type="file"
            name="image"
            className="border-gray-400 rounded-md py-1 bg-none focus:outline-none focus:border-none px-2 w-10/12  ml-2"
          />
        </div>

        <div className=" p-4 flex items-center justify-center w-1/3 ">
          <img
            src="https://res.cloudinary.com/nrob/image/upload/v1613451239/npc5d5r9g0nyyihppqxd.png"
            alt="images"
            className=" h-16 ml-10"
          />
        </div>

        <div className=" p-4 flex items-center justify-center w-2/5 ">
          <button
            type="submit"
            className="bg-main px-8 py-1 focus:outline-none text-white rounded-md  hover:bg-hover"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    <p className="invisible">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, neque
      natus voluptates voluptatibus consectetur sapiente itaque labore quod
      aspernatur, totam nostrum magnam a unde quia aliquam quasi tempora, minima
      illo.
    </p>
  </div>
);

export default CreateBlog;
