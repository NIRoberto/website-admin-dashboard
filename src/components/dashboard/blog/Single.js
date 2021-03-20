import React from "react";
import web from "assets/img/web.png";
import { AiFillHome, AiOutlineComment } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import prof from "assets/img/profileImage.jfif";

const Single = ({ dark, setOpen }) => {
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
          <span className="mx-1">Single Blog</span>
        </div>
      </div>
      <div className="bg-white  shadow-md rounded-md">
        <div>
          <img
            src={web}
            alt="bg images"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div>
          <ul className="flex my-4 text-gray-500">
            <li className="flex ml-4">
              <span>
                <MdDateRange className="text-sm mt-1 mr-0.5 " />
              </span>
              <span className="text-sm"> 17 july 2010</span>
            </li>
            <li className="flex ml-4">
              <span>
                <FaUserAlt className="text-sm mt-1 mr-0.5 " />
              </span>
              <span className="text-sm">Creed cred</span>
            </li>
            <li className="flex ml-4">
              <span>
                <AiOutlineComment className="text-sm mt-1 mr-0.5 " />
              </span>
              <span className="text-sm">15 Comment</span>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="text-base mx-4">
          <h1 className="text-main text-lg border-b py-4 border-gray-400">
            Web development
          </h1>
          <p className="my-4 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            expedita molestiae est, aliquid reprehenderit voluptates recusandae
            in animi excepturi fugiat quis? Eos perspiciatis voluptatem est
            voluptate molestias nam eius accusamus?
          </p>
          <p className="leading-6 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima
            molestias ducimus, quod soluta totam quo dolores possimus, voluptate
            at minus, modi cum obcaecati recusandae nemo dolore accusantium iure
            molestiae beatae temporibus nihil aliquid eius. Atque cum
            necessitatibus molestias, tempora sequi culpa. Harum, iste quaerat
            expedita ullam velit architecto soluta minus? Nesciunt harum dolores
            dolorum optio id omnis accusantium similique repellendus saepe
            numquam praesentium consequuntur fugiat ipsam sit expedita
            consequatur aperiam minima, quis amet? Necessitatibus ipsa autem
            asperiores odio iure a animi, soluta eligendi pariatur ducimus
            perspiciatis tempora eaque praesentium? Sed, ipsum asperiores
            maiores beatae neque ipsa error expedita molestias.
          </p>
        </div>
        <div className="ml-4">
          <h1 className="text-lg border-b border-gray-400 py-4"> Comment 03</h1>
          <div className=" flex m-4 items-center">
            <img
              src={prof}
              alt="profileImage"
              className="h-20 rounded-full border-surface border-8"
            />
            <div>
              <h1>Dev Angel</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus omnis eaque neque tenetur excepturi necessitatibus
                doloremque nesciunt velit, consectetur mollitia nisi ipsum
                eligendi odit inventore blanditiis aspernatur eius veniam
                ducimus.
              </p>
            </div>
          </div>
          <div className=" flex m-4 items-center">
            <img
              src={prof}
              alt="profileImage"
              className="h-20 rounded-full border-surface border-8"
            />
            <div>
              <h1>Dev Angel</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus omnis eaque neque tenetur excepturi necessitatibus
                doloremque nesciunt velit, consectetur mollitia nisi ipsum
                eligendi odit inventore blanditiis aspernatur eius veniam
                ducimus.
              </p>
            </div>
          </div>{" "}
          <div className=" flex m-4 items-center">
            <img
              src={prof}
              alt="profileImage"
              className="h-20 rounded-full border-surface border-8"
            />
            <div>
              <h1>Dev Angel</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus omnis eaque neque tenetur excepturi necessitatibus
                doloremque nesciunt velit, consectetur mollitia nisi ipsum
                eligendi odit inventore blanditiis aspernatur eius veniam
                ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
