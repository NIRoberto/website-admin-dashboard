import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const BlogCard = ({
  fullName, desc, profileImage, title, blogImage,
}) => (
  <div className="flex rounded-md bg-white shadow-md hover:shadow-lg  flex-col">
    <div className="px-2 flex items-center py-2">
      <img
        src={profileImage}
        alt="profile pc"
        className="rounded-full h-10 object-cover"
      />
      <span className="text-sm ml-2 font-bold">{fullName}</span>
    </div>
    <div className="w-full h-32">
      <img
        src={blogImage}
        alt="blogImage"
        className="object-cover w-full h-40"
      />
    </div>
    <div className="mt-8 p-4 pb-3 text-main hover:underline">
      <a href="hello">
        {' '}
        {title}
      </a>
    </div>
    <div className="p-4 pt-0">
      <p className="leading-6 text-sm">
        {desc}
        {' '}
      </p>
    </div>
    <div className=" grid justify-items-center py-2 grid-cols-2 my-2 mt-0  mx-32">
      <button type="button">
        <FaEdit className="text-xl text-main cursor-pointer" />
      </button>
      <button type="button">
        <AiFillDelete className="text-xl text-red-500 cursor-pointer" />
      </button>
    </div>
  </div>
);

export default BlogCard;
