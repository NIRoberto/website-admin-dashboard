import React, { useState } from "react";
import { client } from "components/data/client";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Testimonials = () => {
  const [Index, setIndex] = useState(0);
  const { fullName, image, role, review } = client[Index];
  const checkNumber = (number) => {
    if (number > client.length - 1) {
      return 0;
    }
    if (number < 0) {
      return number - 1;
    }
    return number;
  };

  const prevClient = () => {
    setIndex((index) => {
      let newIndex;
      newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const nextClient = () => {
    setIndex((index) => {
      let newIndex;
      newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <>
      <div className="text-2xl font-bold p-4 border-b border-gray-300">
        <h3>Client review</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  p-2 md:p-4">
        <div className="col-span-1 md:col-span-3">
          <p className="text-sm pt-2 px-2">{review}</p>
        </div>
        <div className="col-span-1">
          <img
            src={image}
            alt="Profile"
            className="h-24 w-24 object-cover rounded-full border-surface shadow-md border-4"
          />
        </div>
        <div className="flex flex-col w-80  md:w-6/12 p-2">
          <span className="font-bold">{fullName}</span>
          <span className="text-sm">{role}</span>
        </div>
      </div>
      <div className="flex items-center  justify-center  py-4 font-bold text-xl">
        <span className="cursor-pointer">
          <AiOutlineLeft onClick={nextClient} />
        </span>
        <span className="cursor-pointer">
          <AiOutlineRight onClick={prevClient} />
        </span>
      </div>
    </>
  );
};

export default Testimonials;
